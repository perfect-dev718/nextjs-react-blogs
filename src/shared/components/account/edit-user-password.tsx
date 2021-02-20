import { useDebounce } from '../../hooks/use-debounce';
import { Label } from '@rebass/forms';
import React, { useEffect, useState } from 'react';
import { Box, Button, Flex, Text } from 'rebass';
import { LoadingButton, TextUpdate, useUpdateUserPasswordMutation } from 'shared';
import { TextField } from '../forms/text-field';

interface Props {
  onError(e: string): void;
  onSuccess(e: string): void;
}

export const EditUserPassword: React.FC<Props> = ({ onError, onSuccess }) => {
  const emptyDetails = {
    newPassword: '',
    confirmPassword: '',
  };

  const headStyle = {
    mb: 2,
    fontSize: [2, 2, 3],
    fontWeight: 'bold',
    textTransform: 'uppercase',
  };

  const textStyle = {
    fontSize: [1, 1, 2],
  };

  const [updateUserPassword, { loading, error }] = useUpdateUserPasswordMutation();

  const [details, setDetails] = useState(emptyDetails);
  const [editing, setEditing] = useState(false);
  const [matchingPasswordError, setMatchingPasswordError] = useState(false);
  const [valid, setValid] = useState(false);
  const debouncedDetails = useDebounce(details, 300);
  const passwordErrorMessage = 'You must provide a matching password';

  const onTextFieldChange = (e: TextUpdate) => {
    setDetails({ ...details, [e.id]: e.value });
  };

  const onSave = async () => {
    onError('');
    onSuccess('');

    try {
      const { data: { dslUpdateUserPassword = false } = {} } = await updateUserPassword({
        variables: {
          input: {
            ...debouncedDetails,
          },
        },
      });

      if (dslUpdateUserPassword) {
        onSuccess('Your password was successfully updated.');
      } else {
        onError('There was a problem updating your password. Please try again.');
      }
    } catch (ex) {
      onError('Unable to perform update request. Please try again.');
    } finally {
      setEditing(false);
    }
  };

  useEffect(() => {
    const matchingPasswordError = debouncedDetails.newPassword !== debouncedDetails.confirmPassword;
    setMatchingPasswordError(matchingPasswordError);
    setValid(!matchingPasswordError);
  }, [debouncedDetails]);

  useEffect(() => {
    if (error) {
      onError('There was a problem updating your password. Please try again.');
    }
  }, [error]);

  return (
    <Box
      my={3}
      p={3}
      backgroundColor="brandThree.11"
      color="ourBlack"
      sx={{ display: 'grid', gap: 3 }}
    >
      {editing ? (
        <>
          <Box>
            <Label color="primary">New Password</Label>
            <TextField
              id="newPassword"
              type="password"
              placeholder="Enter your password"
              onUpdate={onTextFieldChange}
            />
          </Box>

          <Box>
            <Label color="primary">Repeat Password</Label>
            <TextField
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              onUpdate={onTextFieldChange}
              invalid={matchingPasswordError}
              errorMessage={passwordErrorMessage}
            />
          </Box>
        </>
      ) : (
        <Box>
          <Text sx={headStyle}>Password</Text>
          <Text sx={textStyle}>**************</Text>
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
              setDetails({ ...details, newPassword: '', confirmPassword: '' });
              setEditing(false);
            }}
            mr={2}
          >
            Cancel
          </Button>
        )}

        {editing && (
          <LoadingButton
            loading={loading}
            disabled={!valid}
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
