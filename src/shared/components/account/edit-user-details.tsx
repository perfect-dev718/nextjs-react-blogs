import { useUpdateUserMutation } from '@generated/graphql';
import { useDebounce } from '../../hooks/use-debounce';
import { AppContextComponent } from 'lib/context';
import { Label } from '@rebass/forms';
import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Flex, Text } from 'rebass';
import { LoadingButton, TextUpdate } from 'shared';

import { TextField } from '../forms/text-field';

interface Props {
  onError(e: string): void;
  onSuccess(e: string): void;
}

export const EditUserDetails: React.FC<Props> = ({ onError, onSuccess }) => {
  const {
    state: { currentUser: user },
    dispatch,
  } = useContext(AppContextComponent);

  const headStyle = {
    mb: 2,
    fontSize: [2, 2, 3],
    fontWeight: 'bold',
    textTransform: 'uppercase',
  };

  const textStyle = {
    fontSize: [1, 1, 2],
  };

  const emptyDetails = {
    marketingCommunication: user?.marketing || true,
    title: user?.title || '',
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    confirmEmail: user?.email || '',
    phone: user?.phone || '',
  };

  const [updateUserDetails, { loading, error }] = useUpdateUserMutation();

  const [validDetails, setValidDetails] = useState(false);
  const [details, setDetails] = useState(emptyDetails);
  const [editing, setEditing] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const debouncedDetails = useDebounce(details, 300);
  const emailErrorMessage = 'You must enter a valid and matching email address';

  const onTextFieldChange = (e: TextUpdate) => {
    setDetails({ ...details, [e.id]: e.value });
  };

  const onSave = async () => {
    onError('');
    onSuccess('');

    try {
      const {
        data: { dslUpdateUser: { user: newUserDetails = null } = {} } = {},
      } = await updateUserDetails({
        variables: {
          input: {
            user: {
              title: debouncedDetails.title,
              firstName: debouncedDetails.firstName,
              middleName: '',
              lastName: debouncedDetails.lastName,
              phone: debouncedDetails.phone,
              email: debouncedDetails.email,
              confirmEmail: debouncedDetails.confirmEmail,
              marketing: user?.marketing || true,
            },
          },
        },
      });

      if (newUserDetails) {
        onSuccess('Your details were successfully updated.');
        dispatch({ type: 'set-user', payload: newUserDetails });
      } else {
        onError('There was a problem updating your details. Please try again.');
      }
    } catch (ex) {
      onError('Unable to perform update request. Please try again.');
    } finally {
      setEditing(false);
    }
  };

  useEffect(() => {
    let emailError = false;

    if (!debouncedDetails.email.includes('@')) {
      emailError = true;
    }

    if (!(debouncedDetails.email === debouncedDetails.confirmEmail)) {
      emailError = true;
    }

    setEmailError(emailError);
    setValidDetails(emailError);
  }, [debouncedDetails]);

  useEffect(() => {
    if (error) {
      onError('There was a problem updating your details. Please try again.');
    }
  }, [error]);

  return (
    <Box
      p={3}
      my={3}
      backgroundColor="brandThree.11"
      color="ourBlack"
      sx={{ display: 'grid', gap: 3 }}
    >
      <Box>
        <Text sx={headStyle}>Title</Text>
        <Text sx={textStyle}>{user.title}</Text>
      </Box>
      <Box>
        <Text sx={headStyle}>First Name</Text>
        <Text sx={textStyle}>{user.firstName}</Text>
      </Box>
      <Box>
        <Text sx={headStyle}>Last Name</Text>
        <Text sx={textStyle}>{user.lastName}</Text>
      </Box>
      <Box>
        <Text sx={headStyle}>Phone Number</Text>
        <Text sx={textStyle}>{user.phone}</Text>
      </Box>

      {editing ? (
        <>
          <Box>
            <Label color="primary">New Email</Label>
            <TextField
              id="email"
              type="email"
              placeholder="Enter your email"
              defaultValue={details.email}
              onUpdate={onTextFieldChange}
              invalid={emailError}
              errorMessage={emailErrorMessage}
            />
          </Box>
          <Box>
            <Label color="primary">Repeat email</Label>
            <TextField
              id="confirmEmail"
              type="email"
              placeholder="Enter your email"
              defaultValue={details.confirmEmail}
              onUpdate={onTextFieldChange}
              invalid={emailError}
              errorMessage={emailErrorMessage}
            />
          </Box>
        </>
      ) : (
        <Box>
          <Text sx={headStyle}>Email</Text>
          <Text sx={textStyle}>{user.email}</Text>
        </Box>
      )}

      <Flex justifyContent="flex-end">
        {!editing && (
          <Button
            variant="primary"
            width="162px"
            onClick={() => {
              setEditing(true);
            }}
          >
            Change
          </Button>
        )}

        {editing && (
          <Button
            variant="secondary"
            width="162px"
            onClick={() => {
              setEditing(false);
            }}
            mr={1}
          >
            Cancel
          </Button>
        )}

        {editing && (
          <LoadingButton
            loading={loading}
            disabled={validDetails}
            onClick={onSave}
            iconAlign="center"
            variant="primary"
            width="162px"
          >
            Update
          </LoadingButton>
        )}
      </Flex>
    </Box>
  );
};
