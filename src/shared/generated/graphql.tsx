import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  FlexInt: any;
};

export type ProductVariationFeature = {
  __typename?: 'ProductVariationFeature';
  feature_id: Scalars['ID'];
  value: Scalars['String'];
};

export type ApiError = {
  __typename?: 'ApiError';
  status: Scalars['Int'];
  message?: Maybe<Scalars['String']>;
};

export type ProductsAndFiltersResponse = {
  __typename?: 'ProductsAndFiltersResponse';
  products?: Maybe<Array<Product>>;
  filters?: Maybe<Array<Filter>>;
  params?: Maybe<ProductParams>;
};

export type TaxApplication = {
  __typename?: 'TaxApplication';
  key?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Float']>;
};

export type AuthDslResponse = {
  __typename?: 'AuthDslResponse';
  result: Scalars['Boolean'];
  notification?: Maybe<Scalars['String']>;
  user?: Maybe<DslUser>;
  cart?: Maybe<Cart>;
  dslCart?: Maybe<DslCart>;
  management?: Maybe<UserManagement>;
  outlet?: Maybe<DslOutlet>;
};

export type DslProductOption = {
  __typename?: 'DslProductOption';
  id: Scalars['ID'];
  productId: Scalars['Int'];
  name: Scalars['String'];
  description: Scalars['String'];
  icon: Scalars['String'];
  createdOn: Scalars['String'];
  updatedOn: Scalars['String'];
};

export type OrderStub = {
  __typename?: 'OrderStub';
  id: Scalars['Int'];
  userId: Scalars['Int'];
  isParentOrder: Scalars['String'];
  parentOrderId: Scalars['Int'];
  companyId: Scalars['Int'];
  company: Scalars['String'];
  timestamp: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
  status: Scalars['String'];
  total: Scalars['Float'];
  subtotal: Scalars['Float'];
  totalProducts: Scalars['Int'];
};

export type ContentCustomFieldImage = {
  __typename?: 'ContentCustomFieldImage';
  image: ContentImage;
  url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
};

export type DslOrderItem = {
  __typename?: 'DslOrderItem';
  id: Scalars['Int'];
  orderId: Scalars['Int'];
  productId: Scalars['Int'];
  vendorId: Scalars['Int'];
  name: Scalars['String'];
  type: Scalars['String'];
  code: Scalars['String'];
  weight: Scalars['Float'];
  boxLength: Scalars['Float'];
  boxWidth: Scalars['Float'];
  boxHeight: Scalars['Float'];
  price: Scalars['Int'];
  qty: Scalars['Int'];
  total: Scalars['Int'];
  createdOn: Scalars['String'];
  updatedOn: Scalars['String'];
  product?: Maybe<DslProduct>;
};

export type OrdersAndFiltersResponse = {
  __typename?: 'OrdersAndFiltersResponse';
  orders: Array<Maybe<OrderStub>>;
  filters?: Maybe<Array<Maybe<Filter>>>;
  params: ProductParams;
};

export type OrderProduct = {
  __typename?: 'OrderProduct';
  id: Scalars['ID'];
  sku?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  productType?: Maybe<Scalars['String']>;
  popularity?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  basePrice?: Maybe<Scalars['Float']>;
  listPrice?: Maybe<Scalars['Float']>;
  favouritesId?: Maybe<Scalars['Int']>;
  companyId?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['Int']>;
  taxIds?: Maybe<Array<Scalars['Int']>>;
  categoryIds?: Maybe<Array<Scalars['Int']>>;
  userGroupIds?: Maybe<Array<Scalars['Int']>>;
  mainCategory?: Maybe<Scalars['Int']>;
  image?: Maybe<Image>;
  productImages?: Maybe<ProductImagesResponse>;
  features?: Maybe<Array<Maybe<ProductFeature>>>;
  position?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  freeShipping?: Maybe<Scalars['Boolean']>;
  ageVerification?: Maybe<Scalars['Boolean']>;
  options?: Maybe<Array<Maybe<ProductOption>>>;
  tastingNotes?: Maybe<Scalars['String']>;
};

export type DslOrderInput = {
  notes?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  billingLine1: Scalars['String'];
  billingLine2?: Maybe<Scalars['String']>;
  billingLine3?: Maybe<Scalars['String']>;
  billingCity: Scalars['String'];
  billingCounty?: Maybe<Scalars['String']>;
  billingPostcode: Scalars['String'];
  billingCountry: Scalars['String'];
  shippingLine1: Scalars['String'];
  shippingLine2?: Maybe<Scalars['String']>;
  shippingLine3?: Maybe<Scalars['String']>;
  shippingCity: Scalars['String'];
  shippingCounty?: Maybe<Scalars['String']>;
  shippingPostcode: Scalars['String'];
  shippingCountry: Scalars['String'];
  paymentId: Scalars['Int'];
};

export type CategoriesBlock = {
  __typename?: 'CategoriesBlock';
  id: Scalars['ID'];
  type?: Maybe<Scalars['String']>;
  companyId?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  properties?: Maybe<BlockProperties>;
  content?: Maybe<BlockContent>;
  items?: Maybe<Array<Maybe<Category>>>;
};

export type BlockContentItems = {
  __typename?: 'BlockContentItems';
  filling?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  itemIds?: Maybe<Scalars['String']>;
};

export type ProfileFields = {
  __typename?: 'ProfileFields';
  customer?: Maybe<Array<Maybe<ProfileField>>>;
  billing?: Maybe<Array<Maybe<ProfileField>>>;
  shipping?: Maybe<Array<Maybe<ProfileField>>>;
  email?: Maybe<Array<Maybe<ProfileField>>>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  status: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
  companyId: Scalars['Int'];
  company: Scalars['String'];
  outletName: UserProfileFieldValue;
  outletStyle: UserProfileFieldValue;
  legalStatus: UserProfileFieldValue;
  dropPointDescription: UserProfileFieldValue;
  charityNumber: UserProfileFieldValue;
  title: UserProfileFieldValue;
  marketingCommunication: Scalars['Boolean'];
  fields?: Maybe<Array<UserProfileFieldValue>>;
  billingFirstname: Scalars['String'];
  billingLastname: Scalars['String'];
  billingAddress: Scalars['String'];
  billingAddress2: Scalars['String'];
  billingCity: Scalars['String'];
  billingCounty: Scalars['String'];
  billingPostcode: Scalars['String'];
  billingPhone: Scalars['String'];
  shippingFirstname: Scalars['String'];
  shippingLastname: Scalars['String'];
  shippingAddress: Scalars['String'];
  shippingAddress2: Scalars['String'];
  shippingCity: Scalars['String'];
  shippingCounty: Scalars['String'];
  shippingPostcode: Scalars['String'];
  shippingPhone: Scalars['String'];
  shippingType: Scalars['String'];
};

export type Content = {
  __typename?: 'Content';
  id: Scalars['ID'];
  slug: Scalars['String'];
  type: Scalars['String'];
  title: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  body: Scalars['String'];
  media?: Maybe<Array<ContentMedia>>;
  custom?: Maybe<ContentCustomFields>;
};

export type DslOrder = {
  __typename?: 'DslOrder';
  id: Scalars['Int'];
  status: Status;
  userId: Scalars['Int'];
  subtotal: Scalars['Int'];
  discount: Scalars['Int'];
  total: Scalars['Int'];
  notes: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  company: Scalars['String'];
  billingLine1: Scalars['String'];
  billingLine2: Scalars['String'];
  billingLine3: Scalars['String'];
  billingCity: Scalars['String'];
  billingCounty: Scalars['String'];
  billingPostcode: Scalars['String'];
  billingCountry: Scalars['String'];
  shippingLine1: Scalars['String'];
  shippingLine2: Scalars['String'];
  shippingLine3: Scalars['String'];
  shippingCity: Scalars['String'];
  shippingCounty: Scalars['String'];
  shippingPostcode: Scalars['String'];
  shippingCountry: Scalars['String'];
  paymentId: Scalars['Int'];
  createdOn: Scalars['String'];
  updatedOn: Scalars['String'];
  orderItems: Array<DslOrderItem>;
};

export type UpdateAdminOutletInput = {
  id: Scalars['Int'];
  outlet?: Maybe<InsertOutlet>;
};

export type Distributor = {
  id: Scalars['ID'];
  depotCode: Scalars['String'];
};

export type TaxCodeFilter = {
  field: Scalars['String'];
  value: Scalars['String'];
};

export type TaxSummary = {
  __typename?: 'TaxSummary';
  included?: Maybe<Scalars['Float']>;
  added?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

export type ProductsBlock = {
  __typename?: 'ProductsBlock';
  id: Scalars['ID'];
  type?: Maybe<Scalars['String']>;
  companyId?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  properties?: Maybe<BlockProperties>;
  content?: Maybe<BlockContent>;
  items?: Maybe<Array<Maybe<Product>>>;
};

export type DslProductsResponse = {
  __typename?: 'DslProductsResponse';
  totalCount: Scalars['Int'];
  products?: Maybe<Array<DslProduct>>;
  filters?: Maybe<Array<DslFilter>>;
};

export type ProductImagesResponse = {
  __typename?: 'ProductImagesResponse';
  main?: Maybe<Array<ProductImage>>;
  additional?: Maybe<Array<Array<ProductImage>>>;
};

export type InsertProductResponse = {
  __typename?: 'InsertProductResponse';
  product: DslProduct;
};

export type InsertProductPriceOverrideInput = {
  productId: Scalars['ID'];
  userId?: Maybe<Scalars['Int']>;
  outletId?: Maybe<Scalars['Int']>;
  pricing?: Maybe<Array<ProductPriceOverrideInput>>;
};

export type ProductParams = {
  __typename?: 'ProductParams';
  page?: Maybe<Scalars['Int']>;
  itemsPerPage?: Maybe<Scalars['Int']>;
  totalItems?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['String']>;
  sortOrderRev?: Maybe<Scalars['String']>;
  filters?: Maybe<Scalars['String']>;
};

export type UserParams = {
  __typename?: 'UserParams';
  page: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  totalItems: Scalars['Int'];
  sortBy: Scalars['String'];
  sortOrder: Scalars['String'];
  sortOrderRev: Scalars['String'];
  userType: Scalars['String'];
  extendedSearch: Scalars['Boolean'];
};

export type DslFilter = {
  __typename?: 'DslFilter';
  id: Scalars['ID'];
  name: Scalars['String'];
  options?: Maybe<Array<Scalars['String']>>;
};

export type ProfileFieldValueInput = {
  id: Scalars['Int'];
  value: Scalars['String'];
};

export type MediaSizes = {
  __typename?: 'MediaSizes';
  medium?: Maybe<MediaSize>;
  large?: Maybe<MediaSize>;
  thumbnail?: Maybe<MediaSize>;
  mediumLarge?: Maybe<MediaSize>;
  postThumbnail?: Maybe<MediaSize>;
  full?: Maybe<MediaSize>;
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  result: Scalars['Boolean'];
  notification?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  cart?: Maybe<Cart>;
  dslCart?: Maybe<DslCart>;
  management?: Maybe<UserManagement>;
};

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  id: Scalars['Int'];
  name: Scalars['String'];
  description: Scalars['String'];
  position: Scalars['Int'];
  processorId: Scalars['Int'];
};

export type UpdateUserInput = {
  user: DslUserInput;
};

export type TaxCountry = {
  __typename?: 'TaxCountry';
  id: Scalars['Int'];
  code: Scalars['String'];
  name: Scalars['String'];
};

export type InsertOutletResponse = {
  __typename?: 'InsertOutletResponse';
  outlet: DslOutlet;
};

export type DslOutlet = {
  __typename?: 'DslOutlet';
  id: Scalars['ID'];
  status: Status;
  name: Scalars['String'];
  style: Scalars['String'];
  legalStatus: Scalars['String'];
  companyName: Scalars['String'];
  charityNumber: Scalars['String'];
  dropPointDescription: Scalars['String'];
  createdOn: Scalars['String'];
  updatedOn: Scalars['String'];
  address: Address;
};

export type InsertEntityTypeInput = {
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type UsersFilter = {
  statusId?: Maybe<Scalars['Int']>;
};

export type Cart = {
  __typename?: 'Cart';
  id?: Maybe<Scalars['ID']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  totalProducts?: Maybe<Scalars['Int']>;
  subtotal?: Maybe<Scalars['Float']>;
  displaySubtotal?: Maybe<Scalars['Float']>;
  originalSubtotal?: Maybe<Scalars['Float']>;
  taxSubtotal?: Maybe<Scalars['Float']>;
  subtotalDiscount?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  shippingCost?: Maybe<Scalars['Float']>;
  displayShippingCost?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  orderId?: Maybe<Scalars['ID']>;
  user?: Maybe<CartUserData>;
  phone?: Maybe<Scalars['String']>;
  storedTaxes?: Maybe<Scalars['Boolean']>;
  taxSummary?: Maybe<TaxSummary>;
  taxes?: Maybe<Array<Maybe<Tax>>>;
  items?: Maybe<Array<Maybe<CartItem>>>;
  qualifiedPromotions?: Maybe<Array<Maybe<PromotionResult>>>;
};

export type InsertAddress = {
  title: Scalars['String'];
  firstName: Scalars['String'];
  middleName?: Scalars['String'];
  lastName: Scalars['String'];
  lineOne: Scalars['String'];
  lineTwo?: Scalars['String'];
  lineThree?: Scalars['String'];
  city: Scalars['String'];
  county: Scalars['String'];
  postcode: Scalars['String'];
  country: Scalars['String'];
};

export type OrderFilterParams = {
  id?: Maybe<MinMaxFilter>;
  total?: Maybe<MinMaxFilter>;
  date?: Maybe<DateFilter>;
};

export type Order = {
  __typename?: 'Order';
  id: Scalars['Int'];
  userId: Scalars['Int'];
  isParentOrder: Scalars['String'];
  parentOrderId: Scalars['Int'];
  companyId: Scalars['Int'];
  company: Scalars['String'];
  timestamp: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
  status: Scalars['String'];
  totalProducts: Scalars['Int'];
  subtotal: Scalars['Float'];
  displaySubtotal: Scalars['Float'];
  taxSubtotal: Scalars['Float'];
  subtotalDiscount: Scalars['Float'];
  discount: Scalars['Float'];
  shippingCost: Scalars['Float'];
  displayShippingCost: Scalars['Float'];
  total: Scalars['Float'];
  taxExempt: Scalars['Boolean'];
  taxes?: Maybe<Array<Maybe<Tax>>>;
  billingFirstname: Scalars['String'];
  billingLastname: Scalars['String'];
  billingAddress: Scalars['String'];
  billingAddress2: Scalars['String'];
  billingCity: Scalars['String'];
  billingCounty: Scalars['String'];
  billingPostcode: Scalars['String'];
  billingPhone: Scalars['String'];
  shippingFirstname: Scalars['String'];
  shippingLastname: Scalars['String'];
  shippingAddress: Scalars['String'];
  shippingAddress2: Scalars['String'];
  shippingCity: Scalars['String'];
  shippingCounty: Scalars['String'];
  shippingPostcode: Scalars['String'];
  shippingPhone: Scalars['String'];
  shippingType: Scalars['String'];
  items: Array<Maybe<OrderItem>>;
  payment: PaymentMethod;
};

export type PromotionType = {
  __typename?: 'PromotionType';
  name: Scalars['String'];
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type InsertUserInput = {
  user: DslUserInput;
};

export type ContentCustomFieldGroup = {
  __typename?: 'ContentCustomFieldGroup';
  groupName: Scalars['String'];
  items?: Maybe<Array<ContentCustomFieldGroupItem>>;
  subGroupItems?: Maybe<Array<ContentCustomFieldGroupItem>>;
};

export type UserAddress = {
  __typename?: 'UserAddress';
  id: Scalars['Int'];
  title: Scalars['String'];
  first_name: Scalars['String'];
  middle_name: Scalars['String'];
  last_name: Scalars['String'];
  line_one: Scalars['String'];
  line_two: Scalars['String'];
  line_three: Scalars['String'];
  city: Scalars['String'];
  county: Scalars['String'];
  postcode: Scalars['String'];
  country: Scalars['String'];
  phone: Scalars['String'];
};

export type RegisterUser = {
  title: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  confirmPassword: Scalars['String'];
};

export type UpdatePasswordInput = {
  newPassword: Scalars['String'];
  confirmPassword: Scalars['String'];
};

export type CategoryInputResponse = {
  __typename?: 'CategoryInputResponse';
  category: DslCategory;
};

export type ProfileFieldValue = {
  __typename?: 'ProfileFieldValue';
  id: Scalars['Int'];
  value: Scalars['String'];
};

export type UpdateProductVariationsResponse = {
  __typename?: 'UpdateProductVariationsResponse';
  temp: Scalars['String'];
};

export type AdminUsersResponse = {
  __typename?: 'AdminUsersResponse';
  users: Array<Maybe<DslUser>>;
  totalCount: Scalars['Int'];
};

export type UserInsert = {
  title?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  marketing: Scalars['Boolean'];
};

export type DslProductImageInput = {
  id?: Scalars['Int'];
  type: Scalars['String'];
  fullSizePath: Scalars['String'];
  thumbnailPath: Scalars['String'];
};

export type BlockStub = {
  __typename?: 'BlockStub';
  id: Scalars['ID'];
  type?: Maybe<Scalars['String']>;
  companyId?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  properties?: Maybe<BlockProperties>;
  content?: Maybe<BlockContent>;
};

export type UpdateAddress = {
  id: Scalars['Int'];
  title?: Scalars['String'];
  firstName: Scalars['String'];
  middleName?: Scalars['String'];
  lastName: Scalars['String'];
  lineOne: Scalars['String'];
  lineTwo?: Scalars['String'];
  lineThree?: Scalars['String'];
  city: Scalars['String'];
  county: Scalars['String'];
  postcode: Scalars['String'];
  country: Scalars['String'];
};

export type AuthRequest = {
  username: Scalars['String'];
  password: Scalars['String'];
  guestID?: Maybe<Scalars['Int']>;
  vendorID?: Maybe<Scalars['Int']>;
  outletID?: Maybe<Scalars['Int']>;
  roleID?: Maybe<Scalars['Int']>;
};

export type DslProduct = {
  __typename?: 'DslProduct';
  id: Scalars['ID'];
  status: Status;
  type: Scalars['String'];
  name: Scalars['String'];
  shortDescription: Scalars['String'];
  longDescription: Scalars['String'];
  code?: Maybe<Scalars['String']>;
  mrrp: Scalars['Float'];
  popularity: Scalars['Float'];
  searchWords: Scalars['String'];
  seoTitle: Scalars['String'];
  seoDescription: Scalars['String'];
  seoKeywords: Scalars['String'];
  seoSlug: Scalars['String'];
  weight: Scalars['Float'];
  boxLength: Scalars['Float'];
  boxWidth: Scalars['Float'];
  boxHeight: Scalars['Float'];
  featured: Scalars['Boolean'];
  createdOn: Scalars['String'];
  updatedOn: Scalars['String'];
  features?: Maybe<Array<DslProductFeature>>;
  options?: Maybe<Array<DslProductOption>>;
  price: Price;
  promotions?: Maybe<Array<Promotion>>;
  mainImage?: Maybe<DslProductImage>;
  additionalImages?: Maybe<Array<DslProductImage>>;
  onWishlist: Scalars['Boolean'];
  variations?: Maybe<Array<Maybe<ProductVariation>>>;
  taxCode?: Maybe<TaxCode>;
};

export type WishlistItem = {
  __typename?: 'WishlistItem';
  id: Scalars['ID'];
  productId: Scalars['Int'];
  position: Scalars['Int'];
  created: Scalars['String'];
  lastUpdated: Scalars['String'];
};

export type ShipmentMethod = {
  __typename?: 'ShipmentMethod';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type ProductFeature = {
  __typename?: 'ProductFeature';
  id: Scalars['Int'];
  variantId?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  prefix?: Maybe<Scalars['String']>;
  suffix?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['Int']>;
  variants?: Maybe<Array<ProductFeatureVariant>>;
  displayOnHeader?: Maybe<Scalars['Boolean']>;
  displayOnCatalog?: Maybe<Scalars['Boolean']>;
  displayOnProduct?: Maybe<Scalars['Boolean']>;
};

export type ProductFeatureVariant = {
  __typename?: 'ProductFeatureVariant';
  id: Scalars['Int'];
  value?: Maybe<Scalars['String']>;
  variant?: Maybe<Scalars['String']>;
};

export type ContentImage = {
  __typename?: 'ContentImage';
  url: Scalars['String'];
  focalPoint?: Maybe<ContentImageFocalPoint>;
};

export type UpdateOutletResponse = {
  __typename?: 'UpdateOutletResponse';
  outlet: DslOutlet;
};

export type OrderItem = {
  __typename?: 'OrderItem';
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  productId: Scalars['ID'];
  amount: Scalars['Int'];
  price?: Maybe<Scalars['Float']>;
  taxValue?: Maybe<Scalars['Float']>;
  product?: Maybe<OrderProduct>;
};

export type DateFilter = {
  period?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
};

export type ContentServiceCategory = {
  __typename?: 'ContentServiceCategory';
  description?: Maybe<Scalars['String']>;
  visible: Scalars['Boolean'];
  icon: Scalars['String'];
};

export type DslAdminProductsResponse = {
  __typename?: 'DslAdminProductsResponse';
  totalCount: Scalars['Int'];
  products?: Maybe<Array<DslProduct>>;
};

export type DslProductPriceInput = {
  type: Scalars['String'];
  value: Scalars['Float'];
  override?: Maybe<Scalars['Float']>;
  position: Scalars['Int'];
  isTax?: Maybe<Scalars['Boolean']>;
  dateFrom?: Maybe<Scalars['String']>;
  dateTo?: Maybe<Scalars['String']>;
};

export type OrderFilters = {
  number?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  price?: Maybe<PriceFilter>;
  date?: Maybe<DateFilter>;
};

export type ContentButton = {
  __typename?: 'ContentButton';
  title: Scalars['String'];
  url: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Can be used to register a new user on the system. This is tenant specific and may not be enabled for all tenants. You
   * will receive an error message if you try to register a new user for a tenant with this functionality turned off.
   */
  registerUser: AuthResponse;
  /**
   * Provide new details for an already existing user. This is an absolute change so if no details for the given user in
   * the UserUpdate object are changing, then the initial values **still need to be supplied**, otherwise they will be set
   * to `null`.
   */
  updateUser: AuthResponse;
  /** Attempts to log in the user with the supplied credentials. Will return a result if successful or `false` if not. */
  login: AuthResponse;
  /**
   * Attempt to log in the supplied user with an account recovery key. This is mainly used during the password reset
   * process and recovery keys have a very limited life span.
   */
  loginWithRecoveryKey: AuthResponse;
  /** Logs out the user and will destroy their `access_token`. */
  logout: Scalars['Boolean'];
  /**
   * Can be used to refresh a user's session and extend the life of their `access_token`. It will return a result if
   * successful otherwise it will return nothing.
   */
  refresh: AuthResponse;
  /** This will either add or increment the supplied products in the cart by the supplied amount. */
  addToCart?: Maybe<Cart>;
  /**
   * updateCart will apply an absolute update for each cart item supplied. For example, it will set the quantity of a cart
   * item to the value supplied, **not** increment. This can be used to remove items by supplying a 0 amount.
   */
  updateCart?: Maybe<Cart>;
  /** Places an order using the supplied payment and shipping methods. */
  placeOrder?: Maybe<PlaceOrderResponse>;
  /**
   * Initiates the password recovery process. If the given email address exists, an email will be sent with their recovery
   * code inside. This will always return `true` no matter if the email address exists or not.
   */
  resetPassword: Scalars['Boolean'];
  /** Creates a new wishlist. */
  newWishlist: Wishlist;
  /** Deletes the supplied wishlist. */
  deleteWishlist: Scalars['Boolean'];
  /** Adds an item to the wishlist. */
  addItemToWishlist?: Maybe<Wishlist>;
  /** Removes an item from a wishlist. */
  deleteItemFromWishlist?: Maybe<Wishlist>;
  /**
   * Initiate the act on behalf of functionality. This feature must be enabled for the current tenant otherwise this will
   * return an error response.
   */
  actOnBehalfOf: Scalars['Boolean'];
  /** Revokes any current act on behalf of sessions. Will return an error if the feature isn't enabled. */
  revokeActOnBehalfOf: Scalars['Boolean'];
  /** This will queue an installation request email for the current user to the brand owner of the given product id. */
  requestInstallationRequest: Scalars['Boolean'];
  insertProduct: InsertProductResponse;
  updateProduct: UpdateProductResponse;
  deleteProductByID: Scalars['Boolean'];
  insertProductVariations: InsertProductVariationsResponse;
  updateProductVariations: UpdateProductVariationsResponse;
  deleteProductVariations: Scalars['Boolean'];
  insertProductPriceOverride: InsertProductPriceOverrideResponse;
  insertUser: DslUser;
  /**
   * This should be renamed to conform to the insert/update/delete naming convention
   * However the standard schema is already using updateUser and must also be changed - TODO
   */
  updateAdminUser: DslUser;
  deleteUser: Scalars['Boolean'];
  calculatePricing: Scalars['Boolean'];
  insertVendor: Entity;
  deleteVendor: Scalars['Boolean'];
  insertDistributor: Entity;
  deleteDistributor: Scalars['Boolean'];
  insertDepot: Entity;
  deleteDepot: Scalars['Boolean'];
  insertDistributionDepots?: Maybe<Array<Entity>>;
  insertCustomer: Entity;
  deleteCustomer: Scalars['Boolean'];
  insertEntity: Entity;
  insertEntityType: EntityType;
  insertOutlet: InsertOutletResponse;
  updateAdminOutlet: UpdateOutletResponse;
  deleteOutlet: Scalars['Boolean'];
  insertCategory: CategoryInputResponse;
  insertCategoryStructure?: Maybe<Array<Maybe<DslCategory>>>;
  insertTaxCode: TaxCode;
  insertTaxCodes?: Maybe<Array<TaxCode>>;
  updateTaxCode: TaxCode;
  deleteTaxCodeById: Scalars['Boolean'];
  deleteTaxCodeByCode: Scalars['Boolean'];
  /**
   * Can be used to register a new user on the system. This is tenant specific and may not be enabled for all tenants. You
   * will receive an error message if you try to register a new user for a tenant with this functionality turned off.
   */
  dslRegisterUser: AuthDslResponse;
  /** Registers an outlet. */
  registerOutlet: InsertOutletResponse;
  /**
   * Provide new details for an already existing user. This is an absolute change so if no details for the given user in
   * the UserUpdate object are changing, then the initial values **still need to be supplied**, otherwise they will be set
   * to `null`.
   */
  dslUpdateUser: UpdateUserResponse;
  /** Udpates the outlet. Currently, only the name can be changed. */
  updateOutlet: UpdateOutletResponse;
  /** Attempts to log in the user with the supplied credentials. Will return a result if successful or `false` if not. */
  dslLogin: AuthDslResponse;
  /** This will refresh the current user's session if one is found. */
  dslRefresh: Scalars['Boolean'];
  /** Triggers the password reset process if an identity is found. */
  dslPasswordRecovery: Scalars['Boolean'];
  /** Allows resetting of a password with a token. This will *not* log the user in. */
  resetPasswordWithToken: Scalars['Boolean'];
  /** Allows the user to update their password. */
  dslUpdateUserPassword: Scalars['Boolean'];
  /** User Address */
  dslCreateUserAddress: Scalars['Boolean'];
  dslUpdateUserAddress: Scalars['Boolean'];
  dslDeleteUserAddress: Scalars['Boolean'];
  /**
   * Can be used to add, update or remove products from a cart. The supplied array of DslCartProductInput items are
   * processed in place; so adding, updating and removing can all be sent as part of a single request if desired. It does
   * not matter if a cart for the current user context exists or not.
   */
  dslUpdateCart?: Maybe<DslCart>;
  /** Will place an order for the current user. Will fail if no user is currently logged in or doesn't have a cart. */
  dslPlaceOrder: DslOrder;
  /** This will queue an installation request email for the current user to the brand owner of the given product id. */
  dslInstallationRequest: Scalars['Boolean'];
};


export type MutationRegisterUserArgs = {
  user: UserUpdate;
};


export type MutationUpdateUserArgs = {
  user: UserUpdate;
};


export type MutationLoginArgs = {
  authRequest: AuthRequest;
};


export type MutationLoginWithRecoveryKeyArgs = {
  key: Scalars['String'];
  password1: Scalars['String'];
  password2: Scalars['String'];
};


export type MutationAddToCartArgs = {
  products: Array<Maybe<CartInputItem>>;
};


export type MutationUpdateCartArgs = {
  items: Array<Maybe<CartInputUpdateItem>>;
};


export type MutationPlaceOrderArgs = {
  paymentId?: Maybe<Scalars['ID']>;
  shippingId?: Maybe<Scalars['ID']>;
};


export type MutationResetPasswordArgs = {
  email: Scalars['String'];
};


export type MutationNewWishlistArgs = {
  wishlist: NewWishlist;
};


export type MutationDeleteWishlistArgs = {
  id: Scalars['String'];
};


export type MutationAddItemToWishlistArgs = {
  item: AddItemToWishlist;
};


export type MutationDeleteItemFromWishlistArgs = {
  listId: Scalars['String'];
  itemId: Scalars['Int'];
};


export type MutationActOnBehalfOfArgs = {
  actOnId: Scalars['ID'];
};


export type MutationRequestInstallationRequestArgs = {
  productId: Scalars['ID'];
};


export type MutationInsertProductArgs = {
  input: InsertProductInput;
};


export type MutationUpdateProductArgs = {
  input: UpdateProductInput;
};


export type MutationDeleteProductByIdArgs = {
  id: Scalars['Int'];
};


export type MutationInsertProductVariationsArgs = {
  input?: Maybe<InsertProductVariationsInput>;
};


export type MutationUpdateProductVariationsArgs = {
  input?: Maybe<UpdateProductVariationsInput>;
};


export type MutationDeleteProductVariationsArgs = {
  productId: Scalars['Int'];
};


export type MutationInsertProductPriceOverrideArgs = {
  input: InsertProductPriceOverrideInput;
};


export type MutationInsertUserArgs = {
  input: InsertUserInput;
};


export type MutationUpdateAdminUserArgs = {
  input: UpdateUserInput;
};


export type MutationDeleteUserArgs = {
  userId: Scalars['Int'];
};


export type MutationCalculatePricingArgs = {
  productId: Scalars['Int'];
};


export type MutationInsertVendorArgs = {
  input: InsertEntityInput;
};


export type MutationDeleteVendorArgs = {
  vendorId: Scalars['Int'];
};


export type MutationInsertDistributorArgs = {
  input: InsertEntityInput;
};


export type MutationDeleteDistributorArgs = {
  distributorId: Scalars['Int'];
};


export type MutationInsertDepotArgs = {
  input: InsertEntityInput;
};


export type MutationDeleteDepotArgs = {
  depotId: Scalars['Int'];
};


export type MutationInsertDistributionDepotsArgs = {
  input: InsertDistributionDepotsInput;
};


export type MutationInsertCustomerArgs = {
  input: InsertEntityInput;
};


export type MutationDeleteCustomerArgs = {
  customerId: Scalars['Int'];
};


export type MutationInsertEntityArgs = {
  input: InsertEntityInput;
};


export type MutationInsertEntityTypeArgs = {
  input: InsertEntityTypeInput;
};


export type MutationInsertOutletArgs = {
  input: InsertOutletInput;
};


export type MutationUpdateAdminOutletArgs = {
  input: UpdateAdminOutletInput;
};


export type MutationDeleteOutletArgs = {
  id: Scalars['Int'];
};


export type MutationInsertCategoryArgs = {
  input: CategoryInput;
};


export type MutationInsertCategoryStructureArgs = {
  categories?: Maybe<Array<Maybe<CategoryStructureInput>>>;
};


export type MutationInsertTaxCodeArgs = {
  input: TaxCodeInput;
};


export type MutationInsertTaxCodesArgs = {
  input?: Maybe<Array<TaxCodeInput>>;
};


export type MutationUpdateTaxCodeArgs = {
  input: TaxCodeInput;
};


export type MutationDeleteTaxCodeByIdArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteTaxCodeByCodeArgs = {
  code: Scalars['String'];
};


export type MutationDslRegisterUserArgs = {
  input: UserRegistrationInput;
};


export type MutationRegisterOutletArgs = {
  input: InsertOutletInput;
};


export type MutationDslUpdateUserArgs = {
  input: UserUpdateInput;
};


export type MutationUpdateOutletArgs = {
  input: UpdateOutletInput;
};


export type MutationDslLoginArgs = {
  authRequest: AuthRequest;
};


export type MutationDslPasswordRecoveryArgs = {
  identity: Scalars['String'];
};


export type MutationResetPasswordWithTokenArgs = {
  input: ResetPasswordInput;
};


export type MutationDslUpdateUserPasswordArgs = {
  input: UpdatePasswordInput;
};


export type MutationDslCreateUserAddressArgs = {
  bookId: Scalars['Int'];
  address: UserAddressUpdate;
};


export type MutationDslUpdateUserAddressArgs = {
  input: UpdateAddressInput;
};


export type MutationDslDeleteUserAddressArgs = {
  id: Scalars['Int'];
};


export type MutationDslUpdateCartArgs = {
  products: Array<DslCartProductInput>;
};


export type MutationDslPlaceOrderArgs = {
  input: DslOrderInput;
};


export type MutationDslInstallationRequestArgs = {
  productId: Scalars['ID'];
};

export type Banner = {
  __typename?: 'Banner';
  id: Scalars['ID'];
  type?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  imageID?: Maybe<Scalars['Int']>;
  image?: Maybe<Image>;
};

export type ProductVariation = {
  __typename?: 'ProductVariation';
  product_id: Scalars['ID'];
  features?: Maybe<Array<ProductVariationFeature>>;
};

export type ProductOption = {
  __typename?: 'ProductOption';
  id: Scalars['Int'];
  type: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  required: Scalars['Boolean'];
  position: Scalars['Int'];
  text: Scalars['String'];
  variants?: Maybe<Array<ProductOptionVariant>>;
};

export type ProfileField = {
  __typename?: 'ProfileField';
  id: Scalars['Int'];
  type: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  default: Scalars['Boolean'];
  required: Scalars['Boolean'];
  position: Scalars['Int'];
  values?: Maybe<Array<Maybe<ProfileFieldValue>>>;
};

export type DslCategoryInput = {
  parentId?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  shortDescription?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  seoDescription?: Maybe<Scalars['String']>;
  seoKeywords?: Maybe<Scalars['String']>;
  seoSlug?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type OutletAdminParams = {
  pagination?: Maybe<DslAdminPagination>;
  filters?: Maybe<Array<Maybe<DslAdminFilter>>>;
};

export type ProductPricingInput = {
  productPrices?: Maybe<Array<Maybe<ProductPricing>>>;
};

export type PriceFilter = {
  from: Scalars['Int'];
  to: Scalars['Int'];
};

export type CartBillingAddress = {
  __typename?: 'CartBillingAddress';
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  county?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type DslProductOptionInput = {
  id?: Scalars['Int'];
  name: Scalars['String'];
  description?: Scalars['String'];
  icon?: Scalars['String'];
};

export type CartInputUpdateItem = {
  product_id: Scalars['Int'];
  item_id: Scalars['String'];
  amount: Scalars['Int'];
  unitPrice: Scalars['Float'];
  weight: Scalars['Float'];
  options?: Maybe<Array<Maybe<CartInputItemOption>>>;
};

export type CategoryStructureInput = {
  category: DslCategoryInput;
  statusID?: Maybe<Scalars['Int']>;
  subCategories?: Maybe<Array<CategoryStructureInput>>;
};

export type ProductPricing = {
  productId: Scalars['ID'];
  pricing?: Maybe<Array<InsertProductPrice>>;
};

export type BlockProperties = {
  __typename?: 'BlockProperties';
  navigation?: Maybe<Scalars['String']>;
  delay?: Maybe<Scalars['Int']>;
  showPrice?: Maybe<Scalars['Boolean']>;
  enableQuickView?: Maybe<Scalars['Boolean']>;
  notScrollAutomatically?: Maybe<Scalars['Boolean']>;
  scrollPerPage?: Maybe<Scalars['Boolean']>;
  speed?: Maybe<Scalars['Int']>;
  pauseDelay?: Maybe<Scalars['Int']>;
  itemQuantity?: Maybe<Scalars['Int']>;
  thumbnailWidth?: Maybe<Scalars['Int']>;
  outsideNavigation?: Maybe<Scalars['Boolean']>;
  hideAddToCartButton?: Maybe<Scalars['Boolean']>;
};

export type DslOrderResponse = {
  __typename?: 'DslOrderResponse';
  totalCount: Scalars['Int'];
  orders?: Maybe<Array<DslOrder>>;
  filters?: Maybe<Array<DslFilter>>;
};

export type DslProductAdminParams = {
  search?: Maybe<Scalars['String']>;
  pagination?: Maybe<DslAdminPagination>;
  filters?: Maybe<Array<Maybe<DslAdminFilter>>>;
  sort?: Maybe<Sort>;
};

export type UserEntity = {
  __typename?: 'UserEntity';
  id: Scalars['String'];
  parentId?: Maybe<Scalars['String']>;
  Name: Scalars['String'];
};

export type UserUpdate = {
  email: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  confirmPassword?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  company: Scalars['String'];
  marketingCommunication: Scalars['Boolean'];
  fields?: Maybe<Array<ProfileFieldValueInput>>;
  billingFirstname: Scalars['String'];
  billingLastname: Scalars['String'];
  billingPhone: Scalars['String'];
  billingAddress1: Scalars['String'];
  billingAddress2?: Maybe<Scalars['String']>;
  billingCity: Scalars['String'];
  billingPostcode: Scalars['String'];
  billingCounty: Scalars['String'];
  shippingFirstname: Scalars['String'];
  shippingLastname: Scalars['String'];
  shippingPhone: Scalars['String'];
  shippingAddress1: Scalars['String'];
  shippingAddress2?: Maybe<Scalars['String']>;
  shippingCity: Scalars['String'];
  shippingPostcode: Scalars['String'];
  shippingCounty: Scalars['String'];
};

export type AddItemToWishlist = {
  listId: Scalars['String'];
  productId: Scalars['Int'];
};

export type ImageDetail = {
  __typename?: 'ImageDetail';
  imagePath?: Maybe<Scalars['String']>;
  relativePath?: Maybe<Scalars['String']>;
  httpPath?: Maybe<Scalars['String']>;
  httpsPath?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  sizeX: Scalars['FlexInt'];
  sizeY: Scalars['FlexInt'];
};

export type UserUpdateInput = {
  user: UpdateUser;
};

export type Address = {
  __typename?: 'Address';
  id: Scalars['ID'];
  bookId?: Maybe<Scalars['Int']>;
  outletId?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  firstName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  lineOne: Scalars['String'];
  lineTwo?: Maybe<Scalars['String']>;
  lineThree?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  county: Scalars['String'];
  postcode: Scalars['String'];
  country: Scalars['String'];
  type: Scalars['String'];
};

export type InsertProductVariationsResponse = {
  __typename?: 'InsertProductVariationsResponse';
  temp: Scalars['String'];
};

export type CartItem = {
  __typename?: 'CartItem';
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  productId: Scalars['ID'];
  amount: Scalars['Int'];
  price?: Maybe<Scalars['Float']>;
  taxSummary?: Maybe<TaxSummary>;
  taxes?: Maybe<Array<Maybe<Tax>>>;
  product?: Maybe<Product>;
  inRestrictedLocation?: Maybe<Scalars['Boolean']>;
};

export type DslUser = {
  __typename?: 'DslUser';
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  marketing: Scalars['Boolean'];
  identities?: Maybe<Array<Maybe<UserIdentity>>>;
  billingAddresses?: Maybe<Array<Address>>;
  shippingAddresses?: Maybe<Array<Address>>;
};

export type PlaceOrderResponse = {
  __typename?: 'PlaceOrderResponse';
  id: Scalars['Int'];
};

export type ContentHeroCta = {
  __typename?: 'ContentHeroCta';
  image: ContentImage;
  title: Scalars['String'];
  description: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  primaryButton: ContentButton;
  secondaryButton: ContentButton;
};

export type Price = {
  __typename?: 'Price';
  subtotal: Scalars['Float'];
  vat: Scalars['Float'];
  discount: Scalars['Float'];
  total: Scalars['Float'];
};

export type Promotion = {
  __typename?: 'Promotion';
  id: Scalars['Int'];
  type: PromotionType;
  name: Scalars['String'];
  slug: Scalars['String'];
  shortDescription: Scalars['String'];
  longDescription: Scalars['String'];
  imagePath: Scalars['String'];
  priority: Scalars['Int'];
  status: Scalars['String'];
  identityCode: Scalars['String'];
  terms: Scalars['String'];
  activeFrom: Scalars['String'];
  activeTo?: Maybe<Scalars['String']>;
  createdOn: Scalars['String'];
  updatedOn: Scalars['String'];
  productsInPromotion?: Maybe<Array<Scalars['Int']>>;
  categoriesInPromotion?: Maybe<Array<Scalars['Int']>>;
};

export type DslCartProductInput = {
  productId: Scalars['Int'];
  qty: Scalars['Int'];
};

export type InsertOutlet = {
  name: Scalars['String'];
  style: Scalars['String'];
  legalStatus: Scalars['String'];
  companyName?: Scalars['String'];
  charityNumber?: Scalars['String'];
  dropPointDescription?: Scalars['String'];
};

export type ResetPasswordInput = {
  token: Scalars['String'];
  password: Scalars['String'];
  confirmPassword: Scalars['String'];
};

export type CartAddresses = {
  __typename?: 'CartAddresses';
  billing?: Maybe<CartBillingAddress>;
  shipping?: Maybe<CartShippingAddress>;
};

export type MediaDetails = {
  __typename?: 'MediaDetails';
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  sizes?: Maybe<MediaSizes>;
};

export type TaxCodeInput = {
  data: TaxCodeData;
  status: Scalars['Int'];
};

export type TaxRate = {
  __typename?: 'TaxRate';
  value: Scalars['Float'];
  calculationType: Scalars['String'];
};

export type UserRelationship = {
  __typename?: 'UserRelationship';
  name: Scalars['String'];
  entities?: Maybe<Array<Maybe<UserEntity>>>;
};

export type Tax = {
  __typename?: 'Tax';
  rateType?: Maybe<Scalars['String']>;
  rateValue?: Maybe<Scalars['Float']>;
  priceIncludesTax?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  subtotal?: Maybe<Scalars['Float']>;
  applies?: Maybe<Array<Maybe<TaxApplication>>>;
};

export type Wishlist = {
  __typename?: 'Wishlist';
  id: Scalars['ID'];
  userId: Scalars['Int'];
  name: Scalars['String'];
  canDelete: Scalars['Boolean'];
  active: Scalars['Boolean'];
  created: Scalars['String'];
  items?: Maybe<Array<Scalars['Int']>>;
};

export type UserAddressUpdate = {
  id: Scalars['Int'];
  title: Scalars['String'];
  first_name: Scalars['String'];
  middle_name: Scalars['String'];
  last_name: Scalars['String'];
  line_one: Scalars['String'];
  line_two: Scalars['String'];
  line_three: Scalars['String'];
  city: Scalars['String'];
  county: Scalars['String'];
  postcode: Scalars['String'];
  country: Scalars['String'];
  phone: Scalars['String'];
};

export type Brand = {
  __typename?: 'Brand';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

export type CartUserData = {
  __typename?: 'CartUserData';
  id: Scalars['ID'];
  status: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  companyId?: Maybe<Scalars['Int']>;
  company?: Maybe<Scalars['String']>;
  taxExempt?: Maybe<Scalars['Boolean']>;
  address?: Maybe<CartAddresses>;
};

export type UpdateProductResponse = {
  __typename?: 'UpdateProductResponse';
  product: DslProduct;
};

export type UpdateOutletInput = {
  id: Scalars['Int'];
  outletName: Scalars['String'];
  dropPointDescription: Scalars['String'];
};

export type DslUserInput = {
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  marketing: Scalars['Boolean'];
};


export type DslCartProduct = {
  __typename?: 'DslCartProduct';
  id: Scalars['ID'];
  cartId: Scalars['Int'];
  productId: Scalars['Int'];
  qty: Scalars['Int'];
  lastKnownPrice: Scalars['Float'];
  product: DslProduct;
};

export type Image = {
  __typename?: 'Image';
  pairId: Scalars['FlexInt'];
  imageId: Scalars['FlexInt'];
  position: Scalars['FlexInt'];
  detail: ImageDetail;
  icon: ImageDetail;
};

export type OrderInput = {
  userID: Scalars['Int'];
  paymentID?: Maybe<Scalars['Int']>;
  shippingID?: Maybe<Scalars['Int']>;
};

export type UserManagement = {
  __typename?: 'UserManagement';
  relationships?: Maybe<Array<Maybe<UserRelationship>>>;
};

export type BannersBlock = {
  __typename?: 'BannersBlock';
  id: Scalars['ID'];
  type?: Maybe<Scalars['String']>;
  companyId?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  properties?: Maybe<BlockProperties>;
  content?: Maybe<BlockContent>;
  items?: Maybe<Array<Maybe<Banner>>>;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID'];
  parentId: Scalars['Int'];
  path: Scalars['String'];
  name: Scalars['String'];
  slug: Scalars['String'];
  position: Scalars['Int'];
  status: Scalars['String'];
  productCount: Scalars['Int'];
  level: Scalars['FlexInt'];
  companyId?: Maybe<Scalars['Int']>;
  userGroupIds?: Maybe<Array<Scalars['Int']>>;
  timestamp?: Maybe<Scalars['String']>;
  isOp?: Maybe<Scalars['String']>;
  localization?: Maybe<Scalars['String']>;
  ageVerification?: Maybe<Scalars['String']>;
  ageLimit?: Maybe<Scalars['String']>;
  parentAgeVerification?: Maybe<Scalars['String']>;
  parentAgeLimit?: Maybe<Scalars['String']>;
  isTrash?: Maybe<Scalars['String']>;
  langCode?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  metaKeywords?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  pageTitle?: Maybe<Scalars['String']>;
  ageWarningMessage?: Maybe<Scalars['String']>;
  image?: Maybe<Image>;
  seoName: Scalars['String'];
  seoPath: Scalars['String'];
  subCategories?: Maybe<Array<CategoryStub>>;
  productsAndFilters: ProductsAndFiltersResponse;
};


export type CategoryProductsAndFiltersArgs = {
  pagination?: Maybe<Pagination>;
  params?: Maybe<Params>;
};

export type UpdateProductInput = {
  id: Scalars['ID'];
  product: InsertProduct;
  categoryId?: Maybe<Scalars['Int']>;
  taxCodeId?: Maybe<Scalars['Int']>;
};

export type Pagination = {
  page: Scalars['Int'];
  perPage: Scalars['Int'];
};

export type DslCart = {
  __typename?: 'DslCart';
  id: Scalars['ID'];
  userId: Scalars['Int'];
  guestId: Scalars['Int'];
  totalProducts: Scalars['Int'];
  createdOn: Scalars['String'];
  updatedOn: Scalars['String'];
  products?: Maybe<Array<DslCartProduct>>;
  totals: DslCartTotal;
  qualifiedPromotions?: Maybe<Array<Maybe<PromotionResult>>>;
};

export type PromotionResult = {
  __typename?: 'PromotionResult';
  promotionId: Scalars['Int'];
  promotionName: Scalars['String'];
  name: Scalars['String'];
  effectType: Scalars['String'];
  changes?: Maybe<Array<PromotionResultChange>>;
};

export type MinMaxFilter = {
  min?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['Int']>;
};

export type Status = {
  __typename?: 'Status';
  id: Scalars['ID'];
  value: Scalars['Int'];
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  createdOn: Scalars['String'];
  updatedOn: Scalars['String'];
};

export type UserIdentity = {
  __typename?: 'UserIdentity';
  id: Scalars['Int'];
  type: Scalars['String'];
  value: Scalars['String'];
};

export type EntityType = {
  __typename?: 'EntityType';
  id: Scalars['Int'];
  name: Scalars['String'];
  description: Scalars['String'];
  created: Scalars['String'];
};

export type Filter = {
  __typename?: 'Filter';
  id: Scalars['Int'];
  name: Scalars['String'];
  featureId: Scalars['Int'];
  fieldType: Scalars['String'];
  featureType: Scalars['String'];
  prefix: Scalars['String'];
  suffix: Scalars['String'];
  extra: Scalars['String'];
  min: Scalars['Float'];
  max: Scalars['Float'];
  variants?: Maybe<Array<Maybe<FilterVariant>>>;
  selectedVariants?: Maybe<Array<Maybe<FilterVariant>>>;
};

export type InsertOutletInput = {
  outlet: InsertOutlet;
  address: InsertAddress;
};

export type InsertProductPriceOverrideResponse = {
  __typename?: 'InsertProductPriceOverrideResponse';
  productId: Scalars['ID'];
  userId?: Maybe<Scalars['Int']>;
  entityId?: Maybe<Scalars['Int']>;
  pricing?: Maybe<Array<ProductPriceOverride>>;
};

export type ContentImageFocalPoint = {
  __typename?: 'ContentImageFocalPoint';
  top: Scalars['Float'];
  bottom: Scalars['Float'];
  right: Scalars['Float'];
  left: Scalars['Float'];
};

export type CartShippingAddress = {
  __typename?: 'CartShippingAddress';
  type?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  county?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type DslProductImage = {
  __typename?: 'DslProductImage';
  id: Scalars['ID'];
  productId: Scalars['Int'];
  type: Scalars['String'];
  fullSizePath: Scalars['String'];
  thumbnailPath: Scalars['String'];
  createdOn: Scalars['String'];
  updatedOn: Scalars['String'];
};

export type SelectedOption = {
  __typename?: 'SelectedOption';
  id: Scalars['Int'];
  value: Scalars['String'];
};

export type TaxCodesFilter = {
  field: Scalars['String'];
  order: Scalars['String'];
};

export type Checkout = {
  __typename?: 'Checkout';
  cart?: Maybe<Cart>;
  paymentMethods?: Maybe<Array<Maybe<PaymentMethod>>>;
  shipmentMethods?: Maybe<Array<Maybe<ShipmentMethod>>>;
  profileFields?: Maybe<ProfileFields>;
};

export type InsertProductVariationsInput = {
  productId: Scalars['Int'];
};

export type ContentServiceProviderDetail = {
  __typename?: 'ContentServiceProviderDetail';
  name: Scalars['String'];
  detail: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  categories?: Maybe<Array<Maybe<CategoryStub>>>;
  category?: Maybe<Category>;
  categoryByPath?: Maybe<Category>;
  orders: OrdersAndFiltersResponse;
  order?: Maybe<Order>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
  customerProfileFields?: Maybe<Array<ProfileField>>;
  billingAddressProfileFields?: Maybe<Array<ProfileField>>;
  shippingAddressProfileFields?: Maybe<Array<ProfileField>>;
  emailProfileFields?: Maybe<Array<ProfileField>>;
  allProfileFields?: Maybe<Array<ProfileField>>;
  isLoggedIn: AuthResponse;
  content?: Maybe<Array<Maybe<Content>>>;
  brandPartners?: Maybe<Array<Maybe<Brand>>>;
  product?: Maybe<Product>;
  productByPath?: Maybe<Product>;
  products: ProductsResponse;
  productSearch?: Maybe<ProductsResponse>;
  brandPartnerProducts?: Maybe<ProductsAndFiltersResponse>;
  categoryProducts?: Maybe<ProductsAndFiltersResponse>;
  productSearchFilters?: Maybe<Array<Maybe<Filter>>>;
  promotions?: Maybe<Array<Promotion>>;
  cart?: Maybe<Cart>;
  cartCrossSell?: Maybe<Array<Maybe<Product>>>;
  mainNavigationMenu?: Maybe<CategoriesBlock>;
  homepageCategories?: Maybe<CategoriesBlock>;
  topPicksProducts?: Maybe<ProductsBlock>;
  featuredProducts?: Maybe<ProductsBlock>;
  forgotSomethingProducts?: Maybe<ProductsBlock>;
  homepageBanners?: Maybe<BannersBlock>;
  checkout?: Maybe<Checkout>;
  wishlists?: Maybe<Array<Wishlist>>;
  wishlistDetail?: Maybe<Wishlist>;
  actOnBehalfOf: UserWithParams;
  /**
   * Returns a list of recently ordered products from the user's recent orders
   * A user must be logged in to request this information
   */
  recentlyOrderedProducts?: Maybe<Array<Maybe<Product>>>;
  /** Returns a list of available promotion types that can be used for filtering. */
  promotionTypes?: Maybe<Array<PromotionType>>;
  /**
   * Returns a list of promotions mataching the supplied `type`. This should be the `name` field of the `PromotionType`
   * object.
   */
  getPromotionsByType?: Maybe<Array<Maybe<Promotion>>>;
  getAdminProducts: DslAdminProductsResponse;
  getAdminOutlets: OutletsResponse;
  getAdminCategories?: Maybe<Array<Maybe<DslCategory>>>;
  getEntityByName: Entity;
  getEntityTypeByName: EntityType;
  getTaxCodeById: TaxCode;
  getTaxCodeByCode: TaxCode;
  getTaxCodes?: Maybe<Array<TaxCode>>;
  getAdminTaxCodes?: Maybe<TaxCodesResponse>;
  getAdminUsers: AdminUsersResponse;
  /** Returns a list of categories and sub categories if requested. */
  dslCategories?: Maybe<Array<DslCategory>>;
  /** Returns a category matching the supplied id or `null` if none is found. */
  dslCategoryById?: Maybe<DslCategory>;
  /** Returns a category matching the supplied path or `null` if none is found. */
  dslCategoryByPath?: Maybe<DslCategory>;
  /** Returns a list of products for the supplied category `id`. */
  dslCategoryProducts: DslProductsResponse;
  /** Returns a list of products for the supplied brand `slug`. */
  dslBrandPartnerProducts: DslProductsResponse;
  /** Returns a list of products which match the supplied search string. */
  dslProductSearch: DslProductsResponse;
  /** Returns a single product matching the supplied id or `null` if none is found. */
  dslProductById?: Maybe<DslProduct>;
  /** Returns a single product matching the supplied path or `null` if none is found. */
  dslProductByPath?: Maybe<DslProduct>;
  /**
   * Returns the price of a product given the product ID
   * This method will also apply the current context, and return the most relevant price for the context
   */
  dslProductPrice: Price;
  /**
   * Returns a list of related products for the supplied product slug and will fallback to category products if there are
   * not enough specified.
   */
  dslRelatedProducts?: Maybe<Array<DslProduct>>;
  /**
   * Returns a list of cross sell products as per the specified type. Type can be something like `homepage`, `cart`,
   * `forgotten`, etc.
   */
  dslCrossSellProducts?: Maybe<Array<DslProduct>>;
  /** Returns any recently ordered products. */
  dslRecentlyOrderedProducts: DslProductsResponse;
  /** Returns the cart for the current user or guest as per any attached `access_token`. */
  dslCart?: Maybe<DslCart>;
  /** Returns the current user if one is found in the session. */
  dslCurrentUser?: Maybe<AuthDslResponse>;
  /** Returns a list of orders for the currently logged in user. */
  dslUserOrders: DslOrderResponse;
  /** Returns an order for the supplied id if it exists. */
  dslOrderById?: Maybe<DslOrder>;
  /**
   * Calling this will trigger a database import from CS Cart into the DSL. It is only meant for dev purposes and should
   * not be invoked unless required.
   */
  dslImport: Scalars['Boolean'];
  /**
   * This is a test query which will imitate the CS Cart backend view orders page
   * This will be restricted to users with an entity relationship of [UserType:Admin]
   */
  dslOrders?: Maybe<Array<DslOrder>>;
};


export type QueryCategoriesArgs = {
  pagination?: Maybe<Pagination>;
  params?: Maybe<Params>;
};


export type QueryCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryCategoryByPathArgs = {
  path: Scalars['String'];
};


export type QueryOrdersArgs = {
  pagination?: Maybe<Pagination>;
  params?: Maybe<Params>;
};


export type QueryOrderArgs = {
  id: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryContentArgs = {
  params?: Maybe<ContentFilterParams>;
  pagination?: Maybe<Pagination>;
};


export type QueryProductArgs = {
  id: Scalars['ID'];
  params?: Maybe<Params>;
};


export type QueryProductByPathArgs = {
  path: Scalars['String'];
  params?: Maybe<Params>;
};


export type QueryProductsArgs = {
  pagination?: Maybe<Pagination>;
  params?: Maybe<Params>;
};


export type QueryProductSearchArgs = {
  pagination?: Maybe<Pagination>;
  params?: Maybe<Params>;
};


export type QueryBrandPartnerProductsArgs = {
  path: Scalars['String'];
  pagination?: Maybe<Pagination>;
  params?: Maybe<Params>;
};


export type QueryCategoryProductsArgs = {
  id: Scalars['ID'];
  pagination?: Maybe<Pagination>;
  params?: Maybe<Params>;
};


export type QueryProductSearchFiltersArgs = {
  pagination?: Maybe<Pagination>;
  params?: Maybe<Params>;
};


export type QueryCartCrossSellArgs = {
  limit: Scalars['Int'];
  params?: Maybe<Params>;
};


export type QueryTopPicksProductsArgs = {
  params?: Maybe<Params>;
};


export type QueryFeaturedProductsArgs = {
  params?: Maybe<Params>;
};


export type QueryForgotSomethingProductsArgs = {
  params?: Maybe<Params>;
};


export type QueryCheckoutArgs = {
  id: Scalars['ID'];
};


export type QueryWishlistDetailArgs = {
  id: Scalars['String'];
};


export type QueryActOnBehalfOfArgs = {
  pagination?: Maybe<Pagination>;
  params?: Maybe<Params>;
};


export type QueryRecentlyOrderedProductsArgs = {
  params?: Maybe<Params>;
};


export type QueryGetPromotionsByTypeArgs = {
  type: Scalars['String'];
};


export type QueryGetAdminProductsArgs = {
  params?: Maybe<DslProductAdminParams>;
};


export type QueryGetAdminOutletsArgs = {
  params?: Maybe<OutletAdminParams>;
};


export type QueryGetEntityByNameArgs = {
  name: Scalars['String'];
  typeId: Scalars['Int'];
};


export type QueryGetEntityTypeByNameArgs = {
  name: Scalars['String'];
};


export type QueryGetTaxCodeByIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetTaxCodeByCodeArgs = {
  code: Scalars['String'];
};


export type QueryGetAdminTaxCodesArgs = {
  params?: Maybe<TaxCodesAdminParams>;
};


export type QueryGetAdminUsersArgs = {
  params: AdminUsersParams;
};


export type QueryDslCategoryByIdArgs = {
  id: Scalars['ID'];
};


export type QueryDslCategoryByPathArgs = {
  path: Scalars['String'];
};


export type QueryDslCategoryProductsArgs = {
  id: Scalars['ID'];
  sort?: Maybe<Sort>;
  pagination?: Maybe<Pagination>;
  filters?: Maybe<Array<ProductFilter>>;
};


export type QueryDslBrandPartnerProductsArgs = {
  slug: Scalars['String'];
  sort?: Maybe<Sort>;
  pagination?: Maybe<Pagination>;
  filters?: Maybe<Array<ProductFilter>>;
};


export type QueryDslProductSearchArgs = {
  searchQuery: Scalars['String'];
  sort?: Maybe<Sort>;
  pagination?: Maybe<Pagination>;
  filters?: Maybe<Array<ProductFilter>>;
};


export type QueryDslProductByIdArgs = {
  id: Scalars['ID'];
};


export type QueryDslProductByPathArgs = {
  path: Scalars['String'];
};


export type QueryDslProductPriceArgs = {
  productId: Scalars['Int'];
};


export type QueryDslRelatedProductsArgs = {
  slug: Scalars['String'];
  categoryId: Scalars['Int'];
  limit?: Scalars['Int'];
};


export type QueryDslCrossSellProductsArgs = {
  type: Scalars['String'];
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDslRecentlyOrderedProductsArgs = {
  pagination?: Maybe<Pagination>;
};


export type QueryDslUserOrdersArgs = {
  sort?: Maybe<Sort>;
  filters?: Maybe<OrderFilters>;
  pagination?: Maybe<Pagination>;
};


export type QueryDslOrderByIdArgs = {
  id: Scalars['ID'];
};

export type DslAdminFilter = {
  name: Scalars['String'];
  values: Array<Maybe<Scalars['String']>>;
};

export type InsertProductInput = {
  product: InsertProduct;
  categoryId: Scalars['Int'];
  taxCodeId?: Maybe<Scalars['Int']>;
};

export type AdminUsersParams = {
  search?: Maybe<Scalars['String']>;
  pagination?: Maybe<DslAdminPagination>;
  filters?: Maybe<Array<Maybe<DslAdminFilter>>>;
  sort?: Maybe<Sort>;
};

export type UserRegistrationInput = {
  user: RegisterUser;
  address: InsertAddress;
  marketingCommunication?: Scalars['Boolean'];
};

export type BlockContent = {
  __typename?: 'BlockContent';
  items?: Maybe<BlockContentItems>;
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['ID'];
  sku?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  productType?: Maybe<Scalars['String']>;
  popularity?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  basePrice?: Maybe<Scalars['Float']>;
  listPrice?: Maybe<Scalars['Float']>;
  promotionPrice?: Maybe<Scalars['Float']>;
  promotionPriceApplied?: Maybe<Scalars['Float']>;
  favouritesId?: Maybe<Scalars['Int']>;
  companyId?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['Int']>;
  taxIds?: Maybe<Array<Scalars['Int']>>;
  categoryIds?: Maybe<Array<Scalars['Int']>>;
  userGroupIds?: Maybe<Array<Scalars['Int']>>;
  mainCategory?: Maybe<Scalars['Int']>;
  features?: Maybe<Array<ProductFeature>>;
  position?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  freeShipping?: Maybe<Scalars['Boolean']>;
  ageVerification?: Maybe<Scalars['Boolean']>;
  options?: Maybe<Array<ProductOption>>;
  pumpClipAvailable?: Maybe<Scalars['Boolean']>;
  installationEmail?: Maybe<Scalars['String']>;
  tastingNotes?: Maybe<Scalars['String']>;
  productImages?: Maybe<ProductImagesResponse>;
  extra?: Maybe<ProductExtraData>;
  crossSell?: Maybe<Array<Product>>;
  promotions?: Maybe<Array<Promotion>>;
  restrictedLocations?: Maybe<Array<ProductRestrictedLocation>>;
  featured?: Maybe<Scalars['Boolean']>;
};

export type DslProductFeature = {
  __typename?: 'DslProductFeature';
  id: Scalars['ID'];
  name: Scalars['String'];
  value: Scalars['String'];
  description: Scalars['String'];
  featured: Scalars['Boolean'];
  filterable: Scalars['Boolean'];
  position: Scalars['Int'];
  createdOn: Scalars['String'];
  updatedOn: Scalars['String'];
};

export type FilterVariant = {
  __typename?: 'FilterVariant';
  id: Scalars['Int'];
  value: Scalars['String'];
  position: Scalars['Int'];
};

export type UserWithParams = {
  __typename?: 'UserWithParams';
  users?: Maybe<Array<User>>;
  params: UserParams;
};

export type InsertEntityInput = {
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  entityTypeId?: Maybe<Scalars['Int']>;
};

export type DslCategory = {
  __typename?: 'DslCategory';
  id: Scalars['ID'];
  parentId?: Maybe<Scalars['Int']>;
  status: Status;
  name: Scalars['String'];
  shortDescription?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  seoDescription?: Maybe<Scalars['String']>;
  seoKeywords?: Maybe<Scalars['String']>;
  seoSlug?: Maybe<Scalars['String']>;
  createdOn: Scalars['String'];
  updatedOn: Scalars['String'];
  code: Scalars['String'];
  subCategories?: Maybe<Array<Maybe<DslCategory>>>;
  totalProducts: Scalars['Int'];
};

export type ProductPriceOverride = {
  __typename?: 'ProductPriceOverride';
  productId: Scalars['ID'];
  entityId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  type: Scalars['String'];
  value: Scalars['Float'];
  position: Scalars['Int'];
  isTax?: Maybe<Scalars['Boolean']>;
  dateFrom?: Maybe<Scalars['String']>;
  dateTo?: Maybe<Scalars['String']>;
  createdOn: Scalars['String'];
  updatedOn: Scalars['String'];
  status: Status;
};

export type PriceContextInput = {
  productId: Scalars['Int'];
  userId?: Maybe<Scalars['Int']>;
  outletId?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['String']>;
};

export type ContentBrandStore = {
  __typename?: 'ContentBrandStore';
  name: Scalars['String'];
  slug: Scalars['String'];
  image: ContentImage;
  featured?: Maybe<Scalars['Boolean']>;
};

export type CartInputItem = {
  product_id: Scalars['Int'];
  amount: Scalars['Int'];
  unitPrice: Scalars['Float'];
  weight: Scalars['Float'];
  options?: Maybe<Array<Maybe<CartInputItemOption>>>;
};

export type ProductOptionVariant = {
  __typename?: 'ProductOptionVariant';
  id: Scalars['Int'];
  position: Scalars['Int'];
  value: Scalars['String'];
  image?: Maybe<Image>;
  selected: Scalars['Boolean'];
};

export type ProductImage = {
  __typename?: 'ProductImage';
  imagePath: Scalars['String'];
  alt: Scalars['String'];
  width: Scalars['Int'];
  height: Scalars['Int'];
  type: Scalars['String'];
};

export type UpdateProductVariationsInput = {
  productId: Scalars['Int'];
};

export type ContentMedia = {
  __typename?: 'ContentMedia';
  id: Scalars['ID'];
  altText?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  details?: Maybe<MediaDetails>;
};

export type UserAddressBook = {
  __typename?: 'UserAddressBook';
  id: Scalars['Int'];
  addresses?: Maybe<Array<Maybe<UserAddress>>>;
  billingId?: Maybe<Scalars['Int']>;
  shippingId?: Maybe<Scalars['Int']>;
};

export type ContentCustomFields = {
  __typename?: 'ContentCustomFields';
  group?: Maybe<Array<ContentCustomFieldGroup>>;
  images?: Maybe<Array<ContentCustomFieldImage>>;
  navigationAds?: Maybe<Array<ContentCustomFieldGroup>>;
  heroCta?: Maybe<ContentHeroCta>;
  brands?: Maybe<Array<ContentBrandStore>>;
  brandDetail?: Maybe<Array<ContentBrandStoreDetail>>;
  serviceCategory?: Maybe<ContentServiceCategory>;
  serviceProvider?: Maybe<ContentServiceProvider>;
};

export type ProductsResponse = {
  __typename?: 'ProductsResponse';
  products?: Maybe<Array<Product>>;
  params?: Maybe<ProductParams>;
};

export type DslAdminPagination = {
  page: Scalars['Int'];
  perPage: Scalars['Int'];
};

export type ProductPriceOverrideInput = {
  type: Scalars['String'];
  value: Scalars['Float'];
  position: Scalars['Int'];
  isTax?: Maybe<Scalars['Boolean']>;
  dateFrom?: Maybe<Scalars['String']>;
  dateTo?: Maybe<Scalars['String']>;
};

export type TaxCodesAdminParams = {
  search?: Maybe<Scalars['String']>;
  pagination?: Maybe<DslAdminPagination>;
  filters?: Maybe<Array<Maybe<DslAdminFilter>>>;
  sort?: Maybe<Sort>;
};

export type NewWishlist = {
  name: Scalars['String'];
};

export type UpdateAddressInput = {
  address: UpdateAddress;
};

export type DslProductFeatureInput = {
  id?: Scalars['Int'];
  name: Scalars['String'];
  value: Scalars['String'];
  description?: Scalars['String'];
  featured?: Scalars['Boolean'];
  filterable?: Scalars['Boolean'];
  position?: Scalars['Int'];
};

export type InsertDistributionDepotsInput = {
  customerId: Scalars['Int'];
  distributors?: Maybe<Array<Distributor>>;
};

export type DslCartTotal = {
  __typename?: 'DslCartTotal';
  subtotal: Scalars['Int'];
  discount: Scalars['Int'];
  tax: Scalars['Int'];
  total: Scalars['Int'];
};

export type Entity = {
  __typename?: 'Entity';
  id: Scalars['Int'];
  name: Scalars['String'];
  entityTypeID: Scalars['Int'];
  parentEntityTypeID: Scalars['Int'];
  created: Scalars['String'];
};

export type InsertProductPrice = {
  type: Scalars['String'];
  value: Scalars['Float'];
  position: Scalars['Int'];
  isTax?: Maybe<Scalars['Boolean']>;
  dateFrom?: Maybe<Scalars['String']>;
  dateTo?: Maybe<Scalars['String']>;
};

export type TaxCodesResponse = {
  __typename?: 'TaxCodesResponse';
  totalCount: Scalars['Int'];
  taxCodes?: Maybe<Array<Maybe<TaxCode>>>;
};

export type UpdateUser = {
  title: Scalars['String'];
  firstName: Scalars['String'];
  middleName?: Scalars['String'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
  email: Scalars['String'];
  confirmEmail: Scalars['String'];
  marketing: Scalars['Boolean'];
};

export type TaxCodeData = {
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  code: Scalars['String'];
  priority: Scalars['Int'];
  calculationType: Scalars['String'];
  inclusive: Scalars['Boolean'];
  rate: Scalars['Float'];
};

export type ContentBrandStoreDetail = {
  __typename?: 'ContentBrandStoreDetail';
  name: Scalars['String'];
  detail: Scalars['String'];
};

export type PromotionResultChange = {
  __typename?: 'PromotionResultChange';
  id: Scalars['Int'];
  entityId: Scalars['Int'];
  entityType: Scalars['String'];
  originalValue: Scalars['Float'];
  valueChange: Scalars['Float'];
  newValue: Scalars['Float'];
};

export type CategoryStub = {
  __typename?: 'CategoryStub';
  id: Scalars['ID'];
  parentId: Scalars['Int'];
  path: Scalars['String'];
  name: Scalars['String'];
  slug: Scalars['String'];
  position: Scalars['Int'];
  status: Scalars['String'];
  productCount: Scalars['Int'];
  level: Scalars['FlexInt'];
  hasChildren: Scalars['Int'];
  detail?: Maybe<Category>;
  seoName?: Maybe<Scalars['String']>;
  seoPath?: Maybe<Scalars['String']>;
  image?: Maybe<Image>;
  subCategories?: Maybe<Array<CategoryStub>>;
};

export type ContentServiceProvider = {
  __typename?: 'ContentServiceProvider';
  name: Scalars['String'];
  logo: ContentImage;
  national: Scalars['Boolean'];
  location: Scalars['String'];
  description: Scalars['String'];
  email: Scalars['String'];
  number: Scalars['String'];
  address: Scalars['String'];
  heroImage: ContentImage;
  details?: Maybe<Array<ContentServiceProviderDetail>>;
};

export type ProductRestrictedLocation = {
  __typename?: 'ProductRestrictedLocation';
  destination: Scalars['String'];
  destinationId: Scalars['String'];
};

export type InsertProduct = {
  name: Scalars['String'];
  shortDescription: Scalars['String'];
  longDescription: Scalars['String'];
  statusId?: Maybe<Scalars['Int']>;
  code: Scalars['String'];
  mrrp: Scalars['Float'];
  popularity: Scalars['Float'];
  searchWords: Scalars['String'];
  seoTitle: Scalars['String'];
  seoDescription: Scalars['String'];
  seoKeywords: Scalars['String'];
  seoSlug: Scalars['String'];
  weight: Scalars['Float'];
  boxLength: Scalars['Float'];
  boxWidth: Scalars['Float'];
  boxHeight: Scalars['Float'];
  featured: Scalars['Boolean'];
  features?: Maybe<Array<DslProductFeatureInput>>;
  options?: Maybe<Array<DslProductOptionInput>>;
  pricing?: Maybe<Array<Maybe<DslProductPriceInput>>>;
  mainImage?: Maybe<DslProductImageInput>;
  additionalImages?: Maybe<Array<DslProductImageInput>>;
};

export type UpdateUserResponse = {
  __typename?: 'UpdateUserResponse';
  user?: Maybe<DslUser>;
  notification?: Maybe<Scalars['String']>;
};

export type UserProfileFieldValue = {
  __typename?: 'UserProfileFieldValue';
  id: Scalars['Int'];
  value: Scalars['String'];
  valueId?: Maybe<Scalars['Int']>;
};

export type ProductExtraData = {
  __typename?: 'ProductExtraData';
  selectedOptions?: Maybe<Array<SelectedOption>>;
};

export type ProductFilter = {
  id: Scalars['ID'];
  value: Scalars['String'];
};

export type Params = {
  getImages?: Maybe<Scalars['Boolean']>;
  imageSizes?: Maybe<Array<Scalars['String']>>;
  getAdditionalImages?: Maybe<Scalars['Boolean']>;
  fullSizeImage?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['String']>;
  simple?: Maybe<Scalars['Boolean']>;
  filters?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  loadItems?: Maybe<Scalars['Boolean']>;
  searchQuery?: Maybe<Scalars['String']>;
  filterType?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['Int']>;
  getOptions?: Maybe<Scalars['Boolean']>;
  orderFilters?: Maybe<OrderFilterParams>;
  featuredProduct?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
};

export type CategoryInput = {
  category: DslCategoryInput;
  statusID?: Maybe<Scalars['Int']>;
};

export type ContentFilterParams = {
  contentType: Scalars['String'];
  slug?: Scalars['String'];
  metaKey?: Scalars['String'];
  metaValue?: Scalars['String'];
  search?: Scalars['String'];
  serviceCategory?: Scalars['Int'];
};

export type Sort = {
  by?: Scalars['String'];
  direction?: Scalars['String'];
};

export type ContentCustomFieldGroupItem = {
  __typename?: 'ContentCustomFieldGroupItem';
  image?: Maybe<ContentImage>;
  url?: Maybe<Scalars['String']>;
  internal?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type MediaSize = {
  __typename?: 'MediaSize';
  file: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  mimeType: Scalars['String'];
  url: Scalars['String'];
};

export type CartInputItemOption = {
  id: Scalars['Int'];
  value: Scalars['String'];
};

export type OutletsResponse = {
  __typename?: 'OutletsResponse';
  outlets?: Maybe<Array<DslOutlet>>;
};

export type TaxCode = {
  __typename?: 'TaxCode';
  id: Scalars['Int'];
  name: Scalars['String'];
  code: Scalars['String'];
  priority: Scalars['Int'];
  status: Status;
  calculationType: Scalars['String'];
  inclusive: Scalars['Boolean'];
  rate: Scalars['Float'];
};

export type AddressFieldsFragment = (
  { __typename?: 'Address' }
  & Pick<Address, 'id' | 'title' | 'firstName' | 'lastName' | 'lineOne' | 'lineTwo' | 'lineThree' | 'city' | 'county' | 'postcode' | 'country'>
);

export type CartFragment = (
  { __typename?: 'Cart' }
  & Pick<Cart, 'id' | 'total' | 'totalProducts'>
  & { items?: Maybe<Array<Maybe<(
    { __typename?: 'CartItem' }
    & Pick<CartItem, 'name' | 'id' | 'productId' | 'amount' | 'price'>
    & { product?: Maybe<(
      { __typename?: 'Product' }
      & Pick<Product, 'slug' | 'sku'>
      & { productImages?: Maybe<(
        { __typename?: 'ProductImagesResponse' }
        & { main?: Maybe<Array<(
          { __typename?: 'ProductImage' }
          & Pick<ProductImage, 'imagePath' | 'type'>
        )>> }
      )> }
    )> }
  )>>>, user?: Maybe<(
    { __typename?: 'CartUserData' }
    & { address?: Maybe<(
      { __typename?: 'CartAddresses' }
      & { shipping?: Maybe<(
        { __typename?: 'CartShippingAddress' }
        & Pick<CartShippingAddress, 'type' | 'firstName' | 'lastName' | 'address' | 'address2' | 'city' | 'county' | 'state' | 'country' | 'countryCode' | 'postcode' | 'phone'>
      )>, billing?: Maybe<(
        { __typename?: 'CartBillingAddress' }
        & Pick<CartBillingAddress, 'firstName' | 'lastName' | 'address' | 'address2' | 'city' | 'county' | 'state' | 'country' | 'countryCode' | 'postcode' | 'phone'>
      )> }
    )> }
    & CartUserFragment
  )> }
);

export type CartUserFragment = (
  { __typename?: 'CartUserData' }
  & Pick<CartUserData, 'id' | 'status' | 'type' | 'email' | 'firstName' | 'lastName' | 'phone' | 'companyId' | 'company'>
);

export type CategoryFragment = (
  { __typename?: 'Category' }
  & Pick<Category, 'id' | 'parentId' | 'path' | 'name' | 'slug' | 'position' | 'status' | 'productCount' | 'level' | 'companyId' | 'userGroupIds' | 'timestamp' | 'isOp' | 'localization' | 'ageVerification' | 'ageLimit' | 'parentAgeVerification' | 'parentAgeLimit' | 'isTrash' | 'langCode' | 'description' | 'metaKeywords' | 'metaDescription' | 'pageTitle' | 'ageWarningMessage' | 'seoName' | 'seoPath'>
  & { image?: Maybe<(
    { __typename?: 'Image' }
    & ImageFragment
  )>, productsAndFilters: (
    { __typename?: 'ProductsAndFiltersResponse' }
    & { products?: Maybe<Array<(
      { __typename?: 'Product' }
      & ProductFragment
    )>>, filters?: Maybe<Array<(
      { __typename?: 'Filter' }
      & FilterFragment
    )>>, params?: Maybe<(
      { __typename?: 'ProductParams' }
      & ParamsFragment
    )> }
  ) }
);

export type DslCartFieldsFragment = (
  { __typename?: 'DslCart' }
  & Pick<DslCart, 'id' | 'userId' | 'guestId' | 'totalProducts' | 'createdOn' | 'updatedOn'>
  & { totals: (
    { __typename?: 'DslCartTotal' }
    & Pick<DslCartTotal, 'subtotal' | 'discount' | 'tax' | 'total'>
  ), products?: Maybe<Array<(
    { __typename?: 'DslCartProduct' }
    & Pick<DslCartProduct, 'id' | 'productId' | 'qty' | 'lastKnownPrice'>
    & { product: (
      { __typename?: 'DslProduct' }
      & DslProductFieldsFragment
    ) }
  )>>, qualifiedPromotions?: Maybe<Array<Maybe<(
    { __typename?: 'PromotionResult' }
    & Pick<PromotionResult, 'promotionId' | 'promotionName' | 'name' | 'effectType'>
    & { changes?: Maybe<Array<(
      { __typename?: 'PromotionResultChange' }
      & Pick<PromotionResultChange, 'entityId' | 'entityType' | 'originalValue' | 'valueChange' | 'newValue'>
    )>> }
  )>>> }
);

export type DslCategoryFieldsFragment = (
  { __typename?: 'DslCategory' }
  & Pick<DslCategory, 'id' | 'parentId' | 'name' | 'shortDescription' | 'longDescription' | 'seoTitle' | 'seoDescription' | 'seoKeywords' | 'seoSlug' | 'createdOn' | 'updatedOn'>
  & { status: (
    { __typename?: 'Status' }
    & Pick<Status, 'id' | 'value' | 'displayName' | 'description' | 'createdOn' | 'updatedOn'>
  ) }
);

export type DslFilterFieldsFragment = (
  { __typename?: 'DslFilter' }
  & Pick<DslFilter, 'id' | 'name' | 'options'>
);

export type DslOrderFieldsFragment = (
  { __typename?: 'DslOrder' }
  & Pick<DslOrder, 'id' | 'userId' | 'subtotal' | 'discount' | 'total' | 'notes' | 'firstname' | 'lastname' | 'company' | 'billingLine1' | 'billingLine2' | 'billingLine3' | 'billingCity' | 'billingCounty' | 'billingPostcode' | 'billingCountry' | 'shippingLine1' | 'shippingLine2' | 'shippingLine3' | 'shippingCity' | 'shippingCounty' | 'shippingPostcode' | 'shippingCountry' | 'paymentId' | 'createdOn' | 'updatedOn'>
  & { status: (
    { __typename?: 'Status' }
    & Pick<Status, 'id' | 'displayName' | 'description' | 'createdOn' | 'updatedOn'>
  ), orderItems: Array<(
    { __typename?: 'DslOrderItem' }
    & Pick<DslOrderItem, 'id' | 'orderId' | 'productId' | 'vendorId' | 'name' | 'type' | 'code' | 'weight' | 'boxLength' | 'boxWidth' | 'boxHeight' | 'price' | 'qty' | 'total' | 'createdOn' | 'updatedOn'>
    & { product?: Maybe<(
      { __typename?: 'DslProduct' }
      & DslProductFieldsFragment
    )> }
  )> }
);

export type DslProductFieldsFragment = (
  { __typename?: 'DslProduct' }
  & Pick<DslProduct, 'id' | 'type' | 'name' | 'shortDescription' | 'longDescription' | 'code' | 'mrrp' | 'popularity' | 'searchWords' | 'seoTitle' | 'seoDescription' | 'seoKeywords' | 'seoSlug' | 'weight' | 'boxLength' | 'boxWidth' | 'boxHeight' | 'featured' | 'createdOn' | 'updatedOn' | 'onWishlist'>
  & { status: (
    { __typename?: 'Status' }
    & Pick<Status, 'id' | 'displayName' | 'description' | 'value' | 'createdOn' | 'updatedOn'>
  ), features?: Maybe<Array<(
    { __typename?: 'DslProductFeature' }
    & Pick<DslProductFeature, 'id' | 'name' | 'description' | 'value' | 'featured' | 'filterable' | 'position' | 'createdOn' | 'updatedOn'>
  )>>, options?: Maybe<Array<(
    { __typename?: 'DslProductOption' }
    & Pick<DslProductOption, 'id' | 'productId' | 'name' | 'description' | 'icon' | 'createdOn' | 'updatedOn'>
  )>>, price: (
    { __typename?: 'Price' }
    & Pick<Price, 'subtotal' | 'vat' | 'total'>
  ), promotions?: Maybe<Array<(
    { __typename?: 'Promotion' }
    & Pick<Promotion, 'id' | 'name' | 'slug'>
    & { type: (
      { __typename?: 'PromotionType' }
      & Pick<PromotionType, 'name' | 'displayName' | 'description'>
    ) }
  )>>, mainImage?: Maybe<(
    { __typename?: 'DslProductImage' }
    & Pick<DslProductImage, 'fullSizePath' | 'thumbnailPath'>
  )>, additionalImages?: Maybe<Array<(
    { __typename?: 'DslProductImage' }
    & Pick<DslProductImage, 'fullSizePath' | 'thumbnailPath'>
  )>> }
);

export type DslUserFieldsFragment = (
  { __typename?: 'DslUser' }
  & Pick<DslUser, 'id' | 'title' | 'firstName' | 'lastName' | 'phone' | 'email' | 'marketing'>
  & { billingAddresses?: Maybe<Array<(
    { __typename?: 'Address' }
    & AddressFieldsFragment
  )>> }
);

export type FilterFragment = (
  { __typename?: 'Filter' }
  & Pick<Filter, 'id' | 'name' | 'featureId' | 'featureType' | 'fieldType' | 'prefix' | 'suffix' | 'min' | 'max'>
  & { variants?: Maybe<Array<Maybe<(
    { __typename?: 'FilterVariant' }
    & VariantsFragment
  )>>>, selectedVariants?: Maybe<Array<Maybe<(
    { __typename?: 'FilterVariant' }
    & VariantsFragment
  )>>> }
);

export type VariantsFragment = (
  { __typename?: 'FilterVariant' }
  & Pick<FilterVariant, 'id' | 'value' | 'position'>
);

export type ImageFragment = (
  { __typename?: 'Image' }
  & Pick<Image, 'pairId' | 'imageId' | 'position'>
  & { detail: (
    { __typename?: 'ImageDetail' }
    & Pick<ImageDetail, 'imagePath' | 'altText' | 'sizeX' | 'sizeY'>
  ), icon: (
    { __typename?: 'ImageDetail' }
    & Pick<ImageDetail, 'imagePath' | 'altText' | 'sizeX' | 'sizeY'>
  ) }
);

export type OrderStubFragment = (
  { __typename?: 'OrderStub' }
  & Pick<OrderStub, 'id' | 'userId' | 'isParentOrder' | 'parentOrderId' | 'companyId' | 'company' | 'timestamp' | 'firstname' | 'lastname' | 'email' | 'phone' | 'status' | 'total' | 'subtotal' | 'totalProducts'>
);

export type OrderFragment = (
  { __typename?: 'Order' }
  & Pick<Order, 'id' | 'userId' | 'isParentOrder' | 'parentOrderId' | 'companyId' | 'company' | 'timestamp' | 'firstname' | 'lastname' | 'email' | 'phone' | 'status' | 'total' | 'subtotal' | 'discount' | 'subtotalDiscount' | 'shippingCost' | 'billingFirstname' | 'billingLastname' | 'billingAddress' | 'billingAddress2' | 'billingCity' | 'billingCounty' | 'billingPostcode' | 'billingPhone' | 'shippingFirstname' | 'shippingLastname' | 'shippingAddress' | 'shippingAddress2' | 'shippingCity' | 'shippingCounty' | 'shippingPostcode' | 'shippingPhone' | 'shippingType'>
  & { payment: (
    { __typename?: 'PaymentMethod' }
    & Pick<PaymentMethod, 'id' | 'name' | 'description'>
  ), items: Array<Maybe<(
    { __typename?: 'OrderItem' }
    & OrderItemFragment
  )>> }
);

export type OrderItemFragment = (
  { __typename?: 'OrderItem' }
  & Pick<OrderItem, 'id' | 'name' | 'type' | 'productId' | 'amount' | 'price'>
  & { product?: Maybe<(
    { __typename?: 'OrderProduct' }
    & Pick<OrderProduct, 'sku' | 'slug'>
    & { image?: Maybe<(
      { __typename?: 'Image' }
      & { detail: (
        { __typename?: 'ImageDetail' }
        & Pick<ImageDetail, 'imagePath'>
      ) }
    )> }
  )> }
);

export type OutletFieldsFragment = (
  { __typename?: 'DslOutlet' }
  & Pick<DslOutlet, 'id' | 'name' | 'style' | 'legalStatus' | 'companyName' | 'charityNumber' | 'dropPointDescription' | 'createdOn' | 'updatedOn'>
  & { status: (
    { __typename?: 'Status' }
    & Pick<Status, 'id' | 'displayName' | 'description' | 'value' | 'createdOn' | 'updatedOn'>
  ), address: (
    { __typename?: 'Address' }
    & AddressFieldsFragment
  ) }
);

export type ParamsFragment = (
  { __typename?: 'ProductParams' }
  & Pick<ProductParams, 'page' | 'itemsPerPage' | 'totalItems' | 'totalPages'>
);

export type ProductImagesResponseFragment = (
  { __typename?: 'ProductImagesResponse' }
  & { main?: Maybe<Array<(
    { __typename?: 'ProductImage' }
    & ProductImageFragment
  )>>, additional?: Maybe<Array<Array<(
    { __typename?: 'ProductImage' }
    & ProductImageFragment
  )>>> }
);

export type ProductImageFragment = (
  { __typename?: 'ProductImage' }
  & Pick<ProductImage, 'type' | 'imagePath' | 'alt' | 'width' | 'height'>
);

export type ProductFragment = (
  { __typename?: 'Product' }
  & Pick<Product, 'id' | 'sku' | 'featured' | 'status' | 'name' | 'description' | 'slug' | 'type' | 'productType' | 'popularity' | 'price' | 'basePrice' | 'listPrice' | 'favouritesId' | 'companyId' | 'parentId' | 'taxIds' | 'categoryIds' | 'userGroupIds' | 'mainCategory' | 'tastingNotes' | 'position' | 'weight' | 'height' | 'freeShipping' | 'ageVerification' | 'pumpClipAvailable' | 'installationEmail'>
  & { productImages?: Maybe<(
    { __typename?: 'ProductImagesResponse' }
    & ProductImagesResponseFragment
  )>, features?: Maybe<Array<(
    { __typename?: 'ProductFeature' }
    & ProductFeatureFragment
  )>>, options?: Maybe<Array<(
    { __typename?: 'ProductOption' }
    & ProductOptionFragment
  )>>, crossSell?: Maybe<Array<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'name' | 'slug' | 'price' | 'sku'>
    & { productImages?: Maybe<(
      { __typename?: 'ProductImagesResponse' }
      & ProductImagesResponseFragment
    )> }
  )>>, promotions?: Maybe<Array<(
    { __typename?: 'Promotion' }
    & Pick<Promotion, 'id' | 'name' | 'slug'>
    & { type: (
      { __typename?: 'PromotionType' }
      & Pick<PromotionType, 'name' | 'displayName' | 'description'>
    ) }
  )>>, restrictedLocations?: Maybe<Array<(
    { __typename?: 'ProductRestrictedLocation' }
    & Pick<ProductRestrictedLocation, 'destination' | 'destinationId'>
  )>> }
);

export type ProductFeatureFragment = (
  { __typename?: 'ProductFeature' }
  & Pick<ProductFeature, 'id' | 'variantId' | 'type' | 'description' | 'prefix' | 'suffix' | 'value' | 'parentId' | 'displayOnHeader' | 'displayOnCatalog' | 'displayOnProduct'>
  & { variants?: Maybe<Array<(
    { __typename?: 'ProductFeatureVariant' }
    & ProductFeatureVariantFragment
  )>> }
);

export type ProductFeatureVariantFragment = (
  { __typename?: 'ProductFeatureVariant' }
  & Pick<ProductFeatureVariant, 'id' | 'value' | 'variant'>
);

export type ProductOptionFragment = (
  { __typename?: 'ProductOption' }
  & Pick<ProductOption, 'id' | 'type' | 'name' | 'description' | 'required' | 'position' | 'text'>
  & { variants?: Maybe<Array<(
    { __typename?: 'ProductOptionVariant' }
    & ProductOptionVariantFragment
  )>> }
);

export type ProductOptionVariantFragment = (
  { __typename?: 'ProductOptionVariant' }
  & Pick<ProductOptionVariant, 'id' | 'position' | 'value' | 'selected'>
  & { image?: Maybe<(
    { __typename?: 'Image' }
    & ImageFragment
  )> }
);

export type PromotionFragment = (
  { __typename?: 'Promotion' }
  & Pick<Promotion, 'id' | 'name' | 'slug' | 'shortDescription' | 'longDescription' | 'imagePath' | 'priority' | 'status' | 'identityCode' | 'terms' | 'activeFrom' | 'activeTo' | 'productsInPromotion'>
  & { type: (
    { __typename?: 'PromotionType' }
    & Pick<PromotionType, 'name' | 'displayName' | 'description'>
  ) }
);

export type UserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'firstName' | 'lastName' | 'email' | 'status' | 'phone' | 'companyId' | 'company' | 'billingFirstname' | 'billingLastname' | 'billingAddress' | 'billingAddress2' | 'billingCity' | 'billingCounty' | 'billingPostcode' | 'billingPhone' | 'shippingFirstname' | 'shippingLastname' | 'shippingAddress' | 'shippingAddress2' | 'shippingCity' | 'shippingCounty' | 'shippingPostcode' | 'shippingPhone' | 'shippingType'>
);

export type WishlistFragment = (
  { __typename?: 'Wishlist' }
  & Pick<Wishlist, 'id' | 'userId' | 'name' | 'canDelete' | 'active' | 'created' | 'items'>
);

export type AccountRecoveryMutationVariables = Exact<{
  key: Scalars['String'];
  password: Scalars['String'];
  confirmPassword: Scalars['String'];
}>;


export type AccountRecoveryMutation = (
  { __typename?: 'Mutation' }
  & { loginWithRecoveryKey: (
    { __typename?: 'AuthResponse' }
    & Pick<AuthResponse, 'result' | 'notification'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & UserFragment
    )>, cart?: Maybe<(
      { __typename?: 'Cart' }
      & CartFragment
    )> }
  ) }
);

export type AddItemToWishlistMutationVariables = Exact<{
  id: Scalars['String'];
  productId: Scalars['Int'];
}>;


export type AddItemToWishlistMutation = (
  { __typename?: 'Mutation' }
  & { addItemToWishlist?: Maybe<(
    { __typename?: 'Wishlist' }
    & WishlistFragment
  )> }
);

export type DeleteItemFromWishlistMutationVariables = Exact<{
  id: Scalars['String'];
  itemId: Scalars['Int'];
}>;


export type DeleteItemFromWishlistMutation = (
  { __typename?: 'Mutation' }
  & { deleteItemFromWishlist?: Maybe<(
    { __typename?: 'Wishlist' }
    & WishlistFragment
  )> }
);

export type DeleteWishlistMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteWishlistMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteWishlist'>
);

export type EmptyCartMutationVariables = Exact<{
  items: Array<Maybe<CartInputUpdateItem>>;
}>;


export type EmptyCartMutation = (
  { __typename?: 'Mutation' }
  & { updateCart?: Maybe<(
    { __typename?: 'Cart' }
    & CartFragment
  )> }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { dslLogin: (
    { __typename?: 'AuthDslResponse' }
    & Pick<AuthDslResponse, 'result'>
    & { user?: Maybe<(
      { __typename?: 'DslUser' }
      & DslUserFieldsFragment
    )>, dslCart?: Maybe<(
      { __typename?: 'DslCart' }
      & DslCartFieldsFragment
    )>, outlet?: Maybe<(
      { __typename?: 'DslOutlet' }
      & OutletFieldsFragment
    )> }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type NewWishlistMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type NewWishlistMutation = (
  { __typename?: 'Mutation' }
  & { newWishlist: (
    { __typename?: 'Wishlist' }
    & WishlistFragment
  ) }
);

export type RefreshMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'dslRefresh'>
);

export type RequestPasswordRecoveryMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type RequestPasswordRecoveryMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'dslPasswordRecovery'>
);

export type ResetPasswordMutationVariables = Exact<{
  input: ResetPasswordInput;
}>;


export type ResetPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'resetPasswordWithToken'>
);

export type UpdateCartMutationVariables = Exact<{
  products: Array<DslCartProductInput>;
}>;


export type UpdateCartMutation = (
  { __typename?: 'Mutation' }
  & { dslUpdateCart?: Maybe<(
    { __typename?: 'DslCart' }
    & DslCartFieldsFragment
  )> }
);

export type UpdateUserPasswordMutationVariables = Exact<{
  input: UpdatePasswordInput;
}>;


export type UpdateUserPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'dslUpdateUserPassword'>
);

export type UpdateUserMutationVariables = Exact<{
  input: UserUpdateInput;
}>;


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { dslUpdateUser: (
    { __typename?: 'UpdateUserResponse' }
    & Pick<UpdateUserResponse, 'notification'>
    & { user?: Maybe<(
      { __typename?: 'DslUser' }
      & DslUserFieldsFragment
    )> }
  ) }
);

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = (
  { __typename?: 'Query' }
  & { dslCategories?: Maybe<Array<(
    { __typename?: 'DslCategory' }
    & { subCategories?: Maybe<Array<Maybe<(
      { __typename?: 'DslCategory' }
      & { subCategories?: Maybe<Array<Maybe<(
        { __typename?: 'DslCategory' }
        & DslCategoryFieldsFragment
      )>>> }
      & DslCategoryFieldsFragment
    )>>> }
    & DslCategoryFieldsFragment
  )>> }
);

export type CategoryFromPathQueryVariables = Exact<{
  path: Scalars['String'];
}>;


export type CategoryFromPathQuery = (
  { __typename?: 'Query' }
  & { dslCategoryByPath?: Maybe<(
    { __typename?: 'DslCategory' }
    & DslCategoryFieldsFragment
  )> }
);

export type CategoryProductsQueryVariables = Exact<{
  id: Scalars['ID'];
  sort?: Maybe<Sort>;
  pagination?: Maybe<Pagination>;
  filters?: Maybe<Array<ProductFilter>>;
}>;


export type CategoryProductsQuery = (
  { __typename?: 'Query' }
  & { dslCategoryProducts: (
    { __typename?: 'DslProductsResponse' }
    & Pick<DslProductsResponse, 'totalCount'>
    & { products?: Maybe<Array<(
      { __typename?: 'DslProduct' }
      & DslProductFieldsFragment
    )>>, filters?: Maybe<Array<(
      { __typename?: 'DslFilter' }
      & DslFilterFieldsFragment
    )>> }
  ) }
);

export type GetContentPageQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetContentPageQuery = (
  { __typename?: 'Query' }
  & { content?: Maybe<Array<Maybe<(
    { __typename?: 'Content' }
    & Pick<Content, 'id' | 'slug' | 'type' | 'title' | 'body'>
    & { custom?: Maybe<(
      { __typename?: 'ContentCustomFields' }
      & { images?: Maybe<Array<(
        { __typename?: 'ContentCustomFieldImage' }
        & Pick<ContentCustomFieldImage, 'url' | 'title' | 'alt'>
      )>> }
    )> }
  )>>> }
);

export type CurrentUserWithCartQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserWithCartQuery = (
  { __typename?: 'Query' }
  & { dslCurrentUser?: Maybe<(
    { __typename?: 'AuthDslResponse' }
    & Pick<AuthDslResponse, 'result'>
    & { user?: Maybe<(
      { __typename?: 'DslUser' }
      & DslUserFieldsFragment
    )>, outlet?: Maybe<(
      { __typename?: 'DslOutlet' }
      & OutletFieldsFragment
    )> }
  )>, dslCart?: Maybe<(
    { __typename?: 'DslCart' }
    & DslCartFieldsFragment
  )> }
);

export type OrderDetailQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type OrderDetailQuery = (
  { __typename?: 'Query' }
  & { order?: Maybe<(
    { __typename?: 'Order' }
    & OrderFragment
  )> }
);

export type OrdersQueryVariables = Exact<{
  filters: Scalars['String'];
  pagination: Pagination;
  sortBy: Scalars['String'];
}>;


export type OrdersQuery = (
  { __typename?: 'Query' }
  & { orders: (
    { __typename?: 'OrdersAndFiltersResponse' }
    & { orders: Array<Maybe<(
      { __typename?: 'OrderStub' }
      & OrderStubFragment
    )>>, params: (
      { __typename?: 'ProductParams' }
      & ParamsFragment
    ) }
  ) }
);

export type ProductByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ProductByIdQuery = (
  { __typename?: 'Query' }
  & { dslProductById?: Maybe<(
    { __typename?: 'DslProduct' }
    & DslProductFieldsFragment
  )> }
);

export type ProductByPathQueryVariables = Exact<{
  path: Scalars['String'];
}>;


export type ProductByPathQuery = (
  { __typename?: 'Query' }
  & { dslProductByPath?: Maybe<(
    { __typename?: 'DslProduct' }
    & DslProductFieldsFragment
  )> }
);

export type PromotionByTypeQueryVariables = Exact<{
  type: Scalars['String'];
}>;


export type PromotionByTypeQuery = (
  { __typename?: 'Query' }
  & { getPromotionsByType?: Maybe<Array<Maybe<(
    { __typename?: 'Promotion' }
    & PromotionFragment
  )>>> }
);

export type GetPromotionTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPromotionTypesQuery = (
  { __typename?: 'Query' }
  & { promotionTypes?: Maybe<Array<(
    { __typename?: 'PromotionType' }
    & Pick<PromotionType, 'name' | 'displayName' | 'description'>
  )>> }
);

export type GetPromotionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPromotionsQuery = (
  { __typename?: 'Query' }
  & { promotions?: Maybe<Array<(
    { __typename?: 'Promotion' }
    & PromotionFragment
  )>> }
);

export type RecentlyOrderedProductsQueryVariables = Exact<{
  pagination?: Maybe<Pagination>;
}>;


export type RecentlyOrderedProductsQuery = (
  { __typename?: 'Query' }
  & { dslRecentlyOrderedProducts: (
    { __typename?: 'DslProductsResponse' }
    & { products?: Maybe<Array<(
      { __typename?: 'DslProduct' }
      & DslProductFieldsFragment
    )>> }
  ) }
);

export type SearchProductsFullQueryVariables = Exact<{
  filters: Scalars['String'];
  sortBy: Scalars['String'];
  sortOrder: Scalars['String'];
  search: Scalars['String'];
  pagination: Pagination;
}>;


export type SearchProductsFullQuery = (
  { __typename?: 'Query' }
  & { products: (
    { __typename?: 'ProductsResponse' }
    & { products?: Maybe<Array<(
      { __typename?: 'Product' }
      & ProductFragment
    )>>, params?: Maybe<(
      { __typename?: 'ProductParams' }
      & ParamsFragment
    )> }
  ), productSearchFilters?: Maybe<Array<Maybe<(
    { __typename?: 'Filter' }
    & FilterFragment
  )>>> }
);

export type SearchProductsQueryVariables = Exact<{
  searchQuery: Scalars['String'];
  sort?: Maybe<Sort>;
  pagination?: Maybe<Pagination>;
  filters?: Maybe<Array<ProductFilter>>;
}>;


export type SearchProductsQuery = (
  { __typename?: 'Query' }
  & { dslProductSearch: (
    { __typename?: 'DslProductsResponse' }
    & Pick<DslProductsResponse, 'totalCount'>
    & { products?: Maybe<Array<(
      { __typename?: 'DslProduct' }
      & DslProductFieldsFragment
    )>>, filters?: Maybe<Array<(
      { __typename?: 'DslFilter' }
      & DslFilterFieldsFragment
    )>> }
  ) }
);

export type WishlistDetailQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type WishlistDetailQuery = (
  { __typename?: 'Query' }
  & { wishlistDetail?: Maybe<(
    { __typename?: 'Wishlist' }
    & WishlistFragment
  )> }
);

export type WishlistsQueryVariables = Exact<{ [key: string]: never; }>;


export type WishlistsQuery = (
  { __typename?: 'Query' }
  & { wishlists?: Maybe<Array<(
    { __typename?: 'Wishlist' }
    & WishlistFragment
  )>> }
);

export const CartUserFragmentDoc = gql`
    fragment CartUser on CartUserData {
  id
  status
  type
  email
  firstName
  lastName
  phone
  companyId
  company
}
    `;
export const CartFragmentDoc = gql`
    fragment Cart on Cart {
  id
  total
  totalProducts
  items {
    name
    id
    productId
    amount
    price
    product {
      slug
      sku
      productImages {
        main {
          imagePath
          type
        }
      }
    }
  }
  user {
    ...CartUser
    address {
      shipping {
        type
        firstName
        lastName
        address
        address2
        city
        county
        state
        country
        countryCode
        postcode
        phone
      }
      billing {
        firstName
        lastName
        address
        address2
        city
        county
        state
        country
        countryCode
        postcode
        phone
      }
    }
  }
}
    ${CartUserFragmentDoc}`;
export const ImageFragmentDoc = gql`
    fragment Image on Image {
  pairId
  imageId
  position
  detail {
    imagePath
    altText
    sizeX
    sizeY
  }
  icon {
    imagePath
    altText
    sizeX
    sizeY
  }
}
    `;
export const ProductImageFragmentDoc = gql`
    fragment ProductImage on ProductImage {
  type
  imagePath
  alt
  width
  height
}
    `;
export const ProductImagesResponseFragmentDoc = gql`
    fragment ProductImagesResponse on ProductImagesResponse {
  main {
    ...ProductImage
  }
  additional {
    ...ProductImage
  }
}
    ${ProductImageFragmentDoc}`;
export const ProductFeatureVariantFragmentDoc = gql`
    fragment ProductFeatureVariant on ProductFeatureVariant {
  id
  value
  variant
}
    `;
export const ProductFeatureFragmentDoc = gql`
    fragment ProductFeature on ProductFeature {
  id
  variantId
  type
  description
  prefix
  suffix
  value
  parentId
  variants {
    ...ProductFeatureVariant
  }
  displayOnHeader
  displayOnCatalog
  displayOnProduct
}
    ${ProductFeatureVariantFragmentDoc}`;
export const ProductOptionVariantFragmentDoc = gql`
    fragment ProductOptionVariant on ProductOptionVariant {
  id
  position
  value
  image {
    ...Image
  }
  selected
}
    ${ImageFragmentDoc}`;
export const ProductOptionFragmentDoc = gql`
    fragment ProductOption on ProductOption {
  id
  type
  name
  description
  required
  position
  text
  variants {
    ...ProductOptionVariant
  }
}
    ${ProductOptionVariantFragmentDoc}`;
export const ProductFragmentDoc = gql`
    fragment Product on Product {
  id
  sku
  featured
  status
  name
  description
  slug
  type
  productType
  popularity
  price
  basePrice
  listPrice
  favouritesId
  companyId
  parentId
  taxIds
  categoryIds
  userGroupIds
  mainCategory
  tastingNotes
  productImages {
    ...ProductImagesResponse
  }
  features {
    ...ProductFeature
  }
  position
  weight
  height
  freeShipping
  ageVerification
  options {
    ...ProductOption
  }
  pumpClipAvailable
  installationEmail
  crossSell {
    id
    name
    slug
    price
    sku
    productImages {
      ...ProductImagesResponse
    }
  }
  promotions {
    id
    name
    slug
    type {
      name
      displayName
      description
    }
  }
  restrictedLocations {
    destination
    destinationId
  }
}
    ${ProductImagesResponseFragmentDoc}
${ProductFeatureFragmentDoc}
${ProductOptionFragmentDoc}`;
export const VariantsFragmentDoc = gql`
    fragment Variants on FilterVariant {
  id
  value
  position
}
    `;
export const FilterFragmentDoc = gql`
    fragment Filter on Filter {
  id
  name
  featureId
  featureType
  fieldType
  prefix
  suffix
  min
  max
  variants {
    ...Variants
  }
  selectedVariants {
    ...Variants
  }
}
    ${VariantsFragmentDoc}`;
export const ParamsFragmentDoc = gql`
    fragment Params on ProductParams {
  page
  itemsPerPage
  totalItems
  totalPages
}
    `;
export const CategoryFragmentDoc = gql`
    fragment Category on Category {
  id
  parentId
  path
  name
  slug
  position
  status
  productCount
  level
  companyId
  userGroupIds
  timestamp
  isOp
  localization
  ageVerification
  ageLimit
  parentAgeVerification
  parentAgeLimit
  isTrash
  langCode
  description
  metaKeywords
  metaDescription
  pageTitle
  ageWarningMessage
  seoName
  seoPath
  image {
    ...Image
  }
  productsAndFilters(pagination: $pagination, params: {filters: $filters}) {
    products {
      ...Product
    }
    filters {
      ...Filter
    }
    params {
      ...Params
    }
  }
}
    ${ImageFragmentDoc}
${ProductFragmentDoc}
${FilterFragmentDoc}
${ParamsFragmentDoc}`;
export const DslProductFieldsFragmentDoc = gql`
    fragment DslProductFields on DslProduct {
  id
  status {
    id
    displayName
    description
    value
    createdOn
    updatedOn
  }
  type
  name
  shortDescription
  longDescription
  code
  mrrp
  popularity
  searchWords
  seoTitle
  seoDescription
  seoKeywords
  seoSlug
  weight
  boxLength
  boxWidth
  boxHeight
  featured
  createdOn
  updatedOn
  features {
    id
    name
    description
    value
    featured
    filterable
    position
    createdOn
    updatedOn
  }
  options {
    id
    productId
    name
    description
    icon
    createdOn
    updatedOn
  }
  price {
    subtotal
    vat
    total
  }
  promotions {
    id
    name
    slug
    type {
      name
      displayName
      description
    }
  }
  mainImage {
    fullSizePath
    thumbnailPath
  }
  additionalImages {
    fullSizePath
    thumbnailPath
  }
  onWishlist
}
    `;
export const DslCartFieldsFragmentDoc = gql`
    fragment DslCartFields on DslCart {
  id
  userId
  guestId
  totalProducts
  totals {
    subtotal
    discount
    tax
    total
  }
  createdOn
  updatedOn
  products {
    id
    productId
    qty
    lastKnownPrice
    product {
      ...DslProductFields
    }
  }
  qualifiedPromotions {
    promotionId
    promotionName
    name
    effectType
    changes {
      entityId
      entityType
      originalValue
      valueChange
      newValue
    }
  }
}
    ${DslProductFieldsFragmentDoc}`;
export const DslCategoryFieldsFragmentDoc = gql`
    fragment DslCategoryFields on DslCategory {
  id
  parentId
  name
  status {
    id
    value
    displayName
    description
    createdOn
    updatedOn
  }
  shortDescription
  longDescription
  seoTitle
  seoDescription
  seoKeywords
  seoSlug
  createdOn
  updatedOn
}
    `;
export const DslFilterFieldsFragmentDoc = gql`
    fragment DslFilterFields on DslFilter {
  id
  name
  options
}
    `;
export const DslOrderFieldsFragmentDoc = gql`
    fragment DslOrderFields on DslOrder {
  id
  status {
    id
    displayName
    description
    createdOn
    updatedOn
  }
  userId
  subtotal
  discount
  total
  notes
  firstname
  lastname
  company
  billingLine1
  billingLine2
  billingLine3
  billingCity
  billingCounty
  billingPostcode
  billingCountry
  shippingLine1
  shippingLine2
  shippingLine3
  shippingCity
  shippingCounty
  shippingPostcode
  shippingCountry
  paymentId
  createdOn
  updatedOn
  orderItems {
    id
    orderId
    productId
    vendorId
    name
    type
    code
    weight
    boxLength
    boxWidth
    boxHeight
    price
    qty
    total
    createdOn
    updatedOn
    product {
      ...DslProductFields
    }
  }
}
    ${DslProductFieldsFragmentDoc}`;
export const AddressFieldsFragmentDoc = gql`
    fragment AddressFields on Address {
  id
  title
  firstName
  lastName
  lineOne
  lineTwo
  lineThree
  city
  county
  postcode
  country
}
    `;
export const DslUserFieldsFragmentDoc = gql`
    fragment DslUserFields on DslUser {
  id
  title
  firstName
  lastName
  phone
  email
  marketing
  billingAddresses {
    ...AddressFields
  }
}
    ${AddressFieldsFragmentDoc}`;
export const OrderStubFragmentDoc = gql`
    fragment OrderStub on OrderStub {
  id
  userId
  isParentOrder
  parentOrderId
  companyId
  company
  timestamp
  firstname
  lastname
  email
  phone
  status
  total
  subtotal
  totalProducts
}
    `;
export const OrderItemFragmentDoc = gql`
    fragment OrderItem on OrderItem {
  id
  name
  type
  productId
  amount
  price
  product {
    sku
    slug
    image {
      detail {
        imagePath
      }
    }
  }
}
    `;
export const OrderFragmentDoc = gql`
    fragment Order on Order {
  id
  userId
  isParentOrder
  parentOrderId
  companyId
  company
  timestamp
  firstname
  lastname
  email
  phone
  status
  total
  subtotal
  discount
  subtotalDiscount
  shippingCost
  billingFirstname
  billingLastname
  billingAddress
  billingAddress2
  billingCity
  billingCounty
  billingPostcode
  billingPhone
  shippingFirstname
  shippingLastname
  shippingAddress
  shippingAddress2
  shippingCity
  shippingCounty
  shippingPostcode
  shippingPhone
  shippingType
  payment {
    id
    name
    description
  }
  items {
    ...OrderItem
  }
}
    ${OrderItemFragmentDoc}`;
export const OutletFieldsFragmentDoc = gql`
    fragment OutletFields on DslOutlet {
  id
  status {
    id
    displayName
    description
    value
    createdOn
    updatedOn
  }
  name
  style
  legalStatus
  companyName
  charityNumber
  dropPointDescription
  createdOn
  updatedOn
  address {
    ...AddressFields
  }
}
    ${AddressFieldsFragmentDoc}`;
export const PromotionFragmentDoc = gql`
    fragment Promotion on Promotion {
  id
  type {
    name
    displayName
    description
  }
  name
  slug
  shortDescription
  longDescription
  imagePath
  priority
  status
  identityCode
  terms
  activeFrom
  activeTo
  productsInPromotion
}
    `;
export const UserFragmentDoc = gql`
    fragment User on User {
  id
  firstName
  lastName
  email
  status
  phone
  companyId
  company
  billingFirstname
  billingLastname
  billingAddress
  billingAddress2
  billingCity
  billingCounty
  billingPostcode
  billingPhone
  shippingFirstname
  shippingLastname
  shippingAddress
  shippingAddress2
  shippingCity
  shippingCounty
  shippingPostcode
  shippingPhone
  shippingType
}
    `;
export const WishlistFragmentDoc = gql`
    fragment Wishlist on Wishlist {
  id
  userId
  name
  canDelete
  active
  created
  items
}
    `;
export const AccountRecoveryDocument = gql`
    mutation AccountRecovery($key: String!, $password: String!, $confirmPassword: String!) {
  loginWithRecoveryKey(
    key: $key
    password1: $password
    password2: $confirmPassword
  ) {
    result
    user {
      ...User
    }
    cart {
      ...Cart
    }
    notification
  }
}
    ${UserFragmentDoc}
${CartFragmentDoc}`;
export type AccountRecoveryMutationFn = ApolloReactCommon.MutationFunction<AccountRecoveryMutation, AccountRecoveryMutationVariables>;
export type AccountRecoveryComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AccountRecoveryMutation, AccountRecoveryMutationVariables>, 'mutation'>;

    export const AccountRecoveryComponent = (props: AccountRecoveryComponentProps) => (
      <ApolloReactComponents.Mutation<AccountRecoveryMutation, AccountRecoveryMutationVariables> mutation={AccountRecoveryDocument} {...props} />
    );
    
export type AccountRecoveryProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<AccountRecoveryMutation, AccountRecoveryMutationVariables>
    } & TChildProps;
export function withAccountRecovery<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AccountRecoveryMutation,
  AccountRecoveryMutationVariables,
  AccountRecoveryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, AccountRecoveryMutation, AccountRecoveryMutationVariables, AccountRecoveryProps<TChildProps, TDataName>>(AccountRecoveryDocument, {
      alias: 'accountRecovery',
      ...operationOptions
    });
};

/**
 * __useAccountRecoveryMutation__
 *
 * To run a mutation, you first call `useAccountRecoveryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAccountRecoveryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [accountRecoveryMutation, { data, loading, error }] = useAccountRecoveryMutation({
 *   variables: {
 *      key: // value for 'key'
 *      password: // value for 'password'
 *      confirmPassword: // value for 'confirmPassword'
 *   },
 * });
 */
export function useAccountRecoveryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AccountRecoveryMutation, AccountRecoveryMutationVariables>) {
        return ApolloReactHooks.useMutation<AccountRecoveryMutation, AccountRecoveryMutationVariables>(AccountRecoveryDocument, baseOptions);
      }
export type AccountRecoveryMutationHookResult = ReturnType<typeof useAccountRecoveryMutation>;
export type AccountRecoveryMutationResult = ApolloReactCommon.MutationResult<AccountRecoveryMutation>;
export type AccountRecoveryMutationOptions = ApolloReactCommon.BaseMutationOptions<AccountRecoveryMutation, AccountRecoveryMutationVariables>;
export const AddItemToWishlistDocument = gql`
    mutation AddItemToWishlist($id: String!, $productId: Int!) {
  addItemToWishlist(item: {listId: $id, productId: $productId}) {
    ...Wishlist
  }
}
    ${WishlistFragmentDoc}`;
export type AddItemToWishlistMutationFn = ApolloReactCommon.MutationFunction<AddItemToWishlistMutation, AddItemToWishlistMutationVariables>;
export type AddItemToWishlistComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddItemToWishlistMutation, AddItemToWishlistMutationVariables>, 'mutation'>;

    export const AddItemToWishlistComponent = (props: AddItemToWishlistComponentProps) => (
      <ApolloReactComponents.Mutation<AddItemToWishlistMutation, AddItemToWishlistMutationVariables> mutation={AddItemToWishlistDocument} {...props} />
    );
    
export type AddItemToWishlistProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<AddItemToWishlistMutation, AddItemToWishlistMutationVariables>
    } & TChildProps;
export function withAddItemToWishlist<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddItemToWishlistMutation,
  AddItemToWishlistMutationVariables,
  AddItemToWishlistProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, AddItemToWishlistMutation, AddItemToWishlistMutationVariables, AddItemToWishlistProps<TChildProps, TDataName>>(AddItemToWishlistDocument, {
      alias: 'addItemToWishlist',
      ...operationOptions
    });
};

/**
 * __useAddItemToWishlistMutation__
 *
 * To run a mutation, you first call `useAddItemToWishlistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddItemToWishlistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addItemToWishlistMutation, { data, loading, error }] = useAddItemToWishlistMutation({
 *   variables: {
 *      id: // value for 'id'
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useAddItemToWishlistMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddItemToWishlistMutation, AddItemToWishlistMutationVariables>) {
        return ApolloReactHooks.useMutation<AddItemToWishlistMutation, AddItemToWishlistMutationVariables>(AddItemToWishlistDocument, baseOptions);
      }
export type AddItemToWishlistMutationHookResult = ReturnType<typeof useAddItemToWishlistMutation>;
export type AddItemToWishlistMutationResult = ApolloReactCommon.MutationResult<AddItemToWishlistMutation>;
export type AddItemToWishlistMutationOptions = ApolloReactCommon.BaseMutationOptions<AddItemToWishlistMutation, AddItemToWishlistMutationVariables>;
export const DeleteItemFromWishlistDocument = gql`
    mutation DeleteItemFromWishlist($id: String!, $itemId: Int!) {
  deleteItemFromWishlist(itemId: $itemId, listId: $id) {
    ...Wishlist
  }
}
    ${WishlistFragmentDoc}`;
export type DeleteItemFromWishlistMutationFn = ApolloReactCommon.MutationFunction<DeleteItemFromWishlistMutation, DeleteItemFromWishlistMutationVariables>;
export type DeleteItemFromWishlistComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteItemFromWishlistMutation, DeleteItemFromWishlistMutationVariables>, 'mutation'>;

    export const DeleteItemFromWishlistComponent = (props: DeleteItemFromWishlistComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteItemFromWishlistMutation, DeleteItemFromWishlistMutationVariables> mutation={DeleteItemFromWishlistDocument} {...props} />
    );
    
export type DeleteItemFromWishlistProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<DeleteItemFromWishlistMutation, DeleteItemFromWishlistMutationVariables>
    } & TChildProps;
export function withDeleteItemFromWishlist<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteItemFromWishlistMutation,
  DeleteItemFromWishlistMutationVariables,
  DeleteItemFromWishlistProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteItemFromWishlistMutation, DeleteItemFromWishlistMutationVariables, DeleteItemFromWishlistProps<TChildProps, TDataName>>(DeleteItemFromWishlistDocument, {
      alias: 'deleteItemFromWishlist',
      ...operationOptions
    });
};

/**
 * __useDeleteItemFromWishlistMutation__
 *
 * To run a mutation, you first call `useDeleteItemFromWishlistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteItemFromWishlistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteItemFromWishlistMutation, { data, loading, error }] = useDeleteItemFromWishlistMutation({
 *   variables: {
 *      id: // value for 'id'
 *      itemId: // value for 'itemId'
 *   },
 * });
 */
export function useDeleteItemFromWishlistMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteItemFromWishlistMutation, DeleteItemFromWishlistMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteItemFromWishlistMutation, DeleteItemFromWishlistMutationVariables>(DeleteItemFromWishlistDocument, baseOptions);
      }
export type DeleteItemFromWishlistMutationHookResult = ReturnType<typeof useDeleteItemFromWishlistMutation>;
export type DeleteItemFromWishlistMutationResult = ApolloReactCommon.MutationResult<DeleteItemFromWishlistMutation>;
export type DeleteItemFromWishlistMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteItemFromWishlistMutation, DeleteItemFromWishlistMutationVariables>;
export const DeleteWishlistDocument = gql`
    mutation DeleteWishlist($id: String!) {
  deleteWishlist(id: $id)
}
    `;
export type DeleteWishlistMutationFn = ApolloReactCommon.MutationFunction<DeleteWishlistMutation, DeleteWishlistMutationVariables>;
export type DeleteWishlistComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteWishlistMutation, DeleteWishlistMutationVariables>, 'mutation'>;

    export const DeleteWishlistComponent = (props: DeleteWishlistComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteWishlistMutation, DeleteWishlistMutationVariables> mutation={DeleteWishlistDocument} {...props} />
    );
    
export type DeleteWishlistProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<DeleteWishlistMutation, DeleteWishlistMutationVariables>
    } & TChildProps;
export function withDeleteWishlist<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteWishlistMutation,
  DeleteWishlistMutationVariables,
  DeleteWishlistProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteWishlistMutation, DeleteWishlistMutationVariables, DeleteWishlistProps<TChildProps, TDataName>>(DeleteWishlistDocument, {
      alias: 'deleteWishlist',
      ...operationOptions
    });
};

/**
 * __useDeleteWishlistMutation__
 *
 * To run a mutation, you first call `useDeleteWishlistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteWishlistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteWishlistMutation, { data, loading, error }] = useDeleteWishlistMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteWishlistMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteWishlistMutation, DeleteWishlistMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteWishlistMutation, DeleteWishlistMutationVariables>(DeleteWishlistDocument, baseOptions);
      }
export type DeleteWishlistMutationHookResult = ReturnType<typeof useDeleteWishlistMutation>;
export type DeleteWishlistMutationResult = ApolloReactCommon.MutationResult<DeleteWishlistMutation>;
export type DeleteWishlistMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteWishlistMutation, DeleteWishlistMutationVariables>;
export const EmptyCartDocument = gql`
    mutation EmptyCart($items: [CartInputUpdateItem]!) {
  updateCart(items: $items) {
    ...Cart
  }
}
    ${CartFragmentDoc}`;
export type EmptyCartMutationFn = ApolloReactCommon.MutationFunction<EmptyCartMutation, EmptyCartMutationVariables>;
export type EmptyCartComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<EmptyCartMutation, EmptyCartMutationVariables>, 'mutation'>;

    export const EmptyCartComponent = (props: EmptyCartComponentProps) => (
      <ApolloReactComponents.Mutation<EmptyCartMutation, EmptyCartMutationVariables> mutation={EmptyCartDocument} {...props} />
    );
    
export type EmptyCartProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<EmptyCartMutation, EmptyCartMutationVariables>
    } & TChildProps;
export function withEmptyCart<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  EmptyCartMutation,
  EmptyCartMutationVariables,
  EmptyCartProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, EmptyCartMutation, EmptyCartMutationVariables, EmptyCartProps<TChildProps, TDataName>>(EmptyCartDocument, {
      alias: 'emptyCart',
      ...operationOptions
    });
};

/**
 * __useEmptyCartMutation__
 *
 * To run a mutation, you first call `useEmptyCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEmptyCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [emptyCartMutation, { data, loading, error }] = useEmptyCartMutation({
 *   variables: {
 *      items: // value for 'items'
 *   },
 * });
 */
export function useEmptyCartMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EmptyCartMutation, EmptyCartMutationVariables>) {
        return ApolloReactHooks.useMutation<EmptyCartMutation, EmptyCartMutationVariables>(EmptyCartDocument, baseOptions);
      }
export type EmptyCartMutationHookResult = ReturnType<typeof useEmptyCartMutation>;
export type EmptyCartMutationResult = ApolloReactCommon.MutationResult<EmptyCartMutation>;
export type EmptyCartMutationOptions = ApolloReactCommon.BaseMutationOptions<EmptyCartMutation, EmptyCartMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  dslLogin(authRequest: {username: $email, password: $password}) {
    result
    user {
      ...DslUserFields
    }
    dslCart {
      ...DslCartFields
    }
    outlet {
      ...OutletFields
    }
  }
}
    ${DslUserFieldsFragmentDoc}
${DslCartFieldsFragmentDoc}
${OutletFieldsFragmentDoc}`;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;
export type LoginComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LoginMutation, LoginMutationVariables>, 'mutation'>;

    export const LoginComponent = (props: LoginComponentProps) => (
      <ApolloReactComponents.Mutation<LoginMutation, LoginMutationVariables> mutation={LoginDocument} {...props} />
    );
    
export type LoginProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>
    } & TChildProps;
export function withLogin<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LoginMutation,
  LoginMutationVariables,
  LoginProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, LoginMutation, LoginMutationVariables, LoginProps<TChildProps, TDataName>>(LoginDocument, {
      alias: 'login',
      ...operationOptions
    });
};

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = ApolloReactCommon.MutationFunction<LogoutMutation, LogoutMutationVariables>;
export type LogoutComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LogoutMutation, LogoutMutationVariables>, 'mutation'>;

    export const LogoutComponent = (props: LogoutComponentProps) => (
      <ApolloReactComponents.Mutation<LogoutMutation, LogoutMutationVariables> mutation={LogoutDocument} {...props} />
    );
    
export type LogoutProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<LogoutMutation, LogoutMutationVariables>
    } & TChildProps;
export function withLogout<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LogoutMutation,
  LogoutMutationVariables,
  LogoutProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, LogoutMutation, LogoutMutationVariables, LogoutProps<TChildProps, TDataName>>(LogoutDocument, {
      alias: 'logout',
      ...operationOptions
    });
};

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return ApolloReactHooks.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = ApolloReactCommon.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const NewWishlistDocument = gql`
    mutation NewWishlist($name: String!) {
  newWishlist(wishlist: {name: $name}) {
    ...Wishlist
  }
}
    ${WishlistFragmentDoc}`;
export type NewWishlistMutationFn = ApolloReactCommon.MutationFunction<NewWishlistMutation, NewWishlistMutationVariables>;
export type NewWishlistComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<NewWishlistMutation, NewWishlistMutationVariables>, 'mutation'>;

    export const NewWishlistComponent = (props: NewWishlistComponentProps) => (
      <ApolloReactComponents.Mutation<NewWishlistMutation, NewWishlistMutationVariables> mutation={NewWishlistDocument} {...props} />
    );
    
export type NewWishlistProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<NewWishlistMutation, NewWishlistMutationVariables>
    } & TChildProps;
export function withNewWishlist<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  NewWishlistMutation,
  NewWishlistMutationVariables,
  NewWishlistProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, NewWishlistMutation, NewWishlistMutationVariables, NewWishlistProps<TChildProps, TDataName>>(NewWishlistDocument, {
      alias: 'newWishlist',
      ...operationOptions
    });
};

/**
 * __useNewWishlistMutation__
 *
 * To run a mutation, you first call `useNewWishlistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useNewWishlistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [newWishlistMutation, { data, loading, error }] = useNewWishlistMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useNewWishlistMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<NewWishlistMutation, NewWishlistMutationVariables>) {
        return ApolloReactHooks.useMutation<NewWishlistMutation, NewWishlistMutationVariables>(NewWishlistDocument, baseOptions);
      }
export type NewWishlistMutationHookResult = ReturnType<typeof useNewWishlistMutation>;
export type NewWishlistMutationResult = ApolloReactCommon.MutationResult<NewWishlistMutation>;
export type NewWishlistMutationOptions = ApolloReactCommon.BaseMutationOptions<NewWishlistMutation, NewWishlistMutationVariables>;
export const RefreshDocument = gql`
    mutation Refresh {
  dslRefresh
}
    `;
export type RefreshMutationFn = ApolloReactCommon.MutationFunction<RefreshMutation, RefreshMutationVariables>;
export type RefreshComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RefreshMutation, RefreshMutationVariables>, 'mutation'>;

    export const RefreshComponent = (props: RefreshComponentProps) => (
      <ApolloReactComponents.Mutation<RefreshMutation, RefreshMutationVariables> mutation={RefreshDocument} {...props} />
    );
    
export type RefreshProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<RefreshMutation, RefreshMutationVariables>
    } & TChildProps;
export function withRefresh<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RefreshMutation,
  RefreshMutationVariables,
  RefreshProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, RefreshMutation, RefreshMutationVariables, RefreshProps<TChildProps, TDataName>>(RefreshDocument, {
      alias: 'refresh',
      ...operationOptions
    });
};

/**
 * __useRefreshMutation__
 *
 * To run a mutation, you first call `useRefreshMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshMutation, { data, loading, error }] = useRefreshMutation({
 *   variables: {
 *   },
 * });
 */
export function useRefreshMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RefreshMutation, RefreshMutationVariables>) {
        return ApolloReactHooks.useMutation<RefreshMutation, RefreshMutationVariables>(RefreshDocument, baseOptions);
      }
export type RefreshMutationHookResult = ReturnType<typeof useRefreshMutation>;
export type RefreshMutationResult = ApolloReactCommon.MutationResult<RefreshMutation>;
export type RefreshMutationOptions = ApolloReactCommon.BaseMutationOptions<RefreshMutation, RefreshMutationVariables>;
export const RequestPasswordRecoveryDocument = gql`
    mutation RequestPasswordRecovery($email: String!) {
  dslPasswordRecovery(identity: $email)
}
    `;
export type RequestPasswordRecoveryMutationFn = ApolloReactCommon.MutationFunction<RequestPasswordRecoveryMutation, RequestPasswordRecoveryMutationVariables>;
export type RequestPasswordRecoveryComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RequestPasswordRecoveryMutation, RequestPasswordRecoveryMutationVariables>, 'mutation'>;

    export const RequestPasswordRecoveryComponent = (props: RequestPasswordRecoveryComponentProps) => (
      <ApolloReactComponents.Mutation<RequestPasswordRecoveryMutation, RequestPasswordRecoveryMutationVariables> mutation={RequestPasswordRecoveryDocument} {...props} />
    );
    
export type RequestPasswordRecoveryProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<RequestPasswordRecoveryMutation, RequestPasswordRecoveryMutationVariables>
    } & TChildProps;
export function withRequestPasswordRecovery<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RequestPasswordRecoveryMutation,
  RequestPasswordRecoveryMutationVariables,
  RequestPasswordRecoveryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, RequestPasswordRecoveryMutation, RequestPasswordRecoveryMutationVariables, RequestPasswordRecoveryProps<TChildProps, TDataName>>(RequestPasswordRecoveryDocument, {
      alias: 'requestPasswordRecovery',
      ...operationOptions
    });
};

/**
 * __useRequestPasswordRecoveryMutation__
 *
 * To run a mutation, you first call `useRequestPasswordRecoveryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestPasswordRecoveryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestPasswordRecoveryMutation, { data, loading, error }] = useRequestPasswordRecoveryMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRequestPasswordRecoveryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RequestPasswordRecoveryMutation, RequestPasswordRecoveryMutationVariables>) {
        return ApolloReactHooks.useMutation<RequestPasswordRecoveryMutation, RequestPasswordRecoveryMutationVariables>(RequestPasswordRecoveryDocument, baseOptions);
      }
export type RequestPasswordRecoveryMutationHookResult = ReturnType<typeof useRequestPasswordRecoveryMutation>;
export type RequestPasswordRecoveryMutationResult = ApolloReactCommon.MutationResult<RequestPasswordRecoveryMutation>;
export type RequestPasswordRecoveryMutationOptions = ApolloReactCommon.BaseMutationOptions<RequestPasswordRecoveryMutation, RequestPasswordRecoveryMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($input: ResetPasswordInput!) {
  resetPasswordWithToken(input: $input)
}
    `;
export type ResetPasswordMutationFn = ApolloReactCommon.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;
export type ResetPasswordComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ResetPasswordMutation, ResetPasswordMutationVariables>, 'mutation'>;

    export const ResetPasswordComponent = (props: ResetPasswordComponentProps) => (
      <ApolloReactComponents.Mutation<ResetPasswordMutation, ResetPasswordMutationVariables> mutation={ResetPasswordDocument} {...props} />
    );
    
export type ResetPasswordProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>
    } & TChildProps;
export function withResetPassword<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ResetPasswordMutation,
  ResetPasswordMutationVariables,
  ResetPasswordProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, ResetPasswordMutation, ResetPasswordMutationVariables, ResetPasswordProps<TChildProps, TDataName>>(ResetPasswordDocument, {
      alias: 'resetPassword',
      ...operationOptions
    });
};

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        return ApolloReactHooks.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, baseOptions);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = ApolloReactCommon.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const UpdateCartDocument = gql`
    mutation UpdateCart($products: [DslCartProductInput!]!) {
  dslUpdateCart(products: $products) {
    ...DslCartFields
  }
}
    ${DslCartFieldsFragmentDoc}`;
export type UpdateCartMutationFn = ApolloReactCommon.MutationFunction<UpdateCartMutation, UpdateCartMutationVariables>;
export type UpdateCartComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateCartMutation, UpdateCartMutationVariables>, 'mutation'>;

    export const UpdateCartComponent = (props: UpdateCartComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateCartMutation, UpdateCartMutationVariables> mutation={UpdateCartDocument} {...props} />
    );
    
export type UpdateCartProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateCartMutation, UpdateCartMutationVariables>
    } & TChildProps;
export function withUpdateCart<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateCartMutation,
  UpdateCartMutationVariables,
  UpdateCartProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateCartMutation, UpdateCartMutationVariables, UpdateCartProps<TChildProps, TDataName>>(UpdateCartDocument, {
      alias: 'updateCart',
      ...operationOptions
    });
};

/**
 * __useUpdateCartMutation__
 *
 * To run a mutation, you first call `useUpdateCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCartMutation, { data, loading, error }] = useUpdateCartMutation({
 *   variables: {
 *      products: // value for 'products'
 *   },
 * });
 */
export function useUpdateCartMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateCartMutation, UpdateCartMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateCartMutation, UpdateCartMutationVariables>(UpdateCartDocument, baseOptions);
      }
export type UpdateCartMutationHookResult = ReturnType<typeof useUpdateCartMutation>;
export type UpdateCartMutationResult = ApolloReactCommon.MutationResult<UpdateCartMutation>;
export type UpdateCartMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateCartMutation, UpdateCartMutationVariables>;
export const UpdateUserPasswordDocument = gql`
    mutation UpdateUserPassword($input: UpdatePasswordInput!) {
  dslUpdateUserPassword(input: $input)
}
    `;
export type UpdateUserPasswordMutationFn = ApolloReactCommon.MutationFunction<UpdateUserPasswordMutation, UpdateUserPasswordMutationVariables>;
export type UpdateUserPasswordComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateUserPasswordMutation, UpdateUserPasswordMutationVariables>, 'mutation'>;

    export const UpdateUserPasswordComponent = (props: UpdateUserPasswordComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateUserPasswordMutation, UpdateUserPasswordMutationVariables> mutation={UpdateUserPasswordDocument} {...props} />
    );
    
export type UpdateUserPasswordProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateUserPasswordMutation, UpdateUserPasswordMutationVariables>
    } & TChildProps;
export function withUpdateUserPassword<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateUserPasswordMutation,
  UpdateUserPasswordMutationVariables,
  UpdateUserPasswordProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateUserPasswordMutation, UpdateUserPasswordMutationVariables, UpdateUserPasswordProps<TChildProps, TDataName>>(UpdateUserPasswordDocument, {
      alias: 'updateUserPassword',
      ...operationOptions
    });
};

/**
 * __useUpdateUserPasswordMutation__
 *
 * To run a mutation, you first call `useUpdateUserPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserPasswordMutation, { data, loading, error }] = useUpdateUserPasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserPasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateUserPasswordMutation, UpdateUserPasswordMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateUserPasswordMutation, UpdateUserPasswordMutationVariables>(UpdateUserPasswordDocument, baseOptions);
      }
export type UpdateUserPasswordMutationHookResult = ReturnType<typeof useUpdateUserPasswordMutation>;
export type UpdateUserPasswordMutationResult = ApolloReactCommon.MutationResult<UpdateUserPasswordMutation>;
export type UpdateUserPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateUserPasswordMutation, UpdateUserPasswordMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($input: UserUpdateInput!) {
  dslUpdateUser(input: $input) {
    user {
      ...DslUserFields
    }
    notification
  }
}
    ${DslUserFieldsFragmentDoc}`;
export type UpdateUserMutationFn = ApolloReactCommon.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;
export type UpdateUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateUserMutation, UpdateUserMutationVariables>, 'mutation'>;

    export const UpdateUserComponent = (props: UpdateUserComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateUserMutation, UpdateUserMutationVariables> mutation={UpdateUserDocument} {...props} />
    );
    
export type UpdateUserProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>
    } & TChildProps;
export function withUpdateUser<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateUserMutation,
  UpdateUserMutationVariables,
  UpdateUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateUserMutation, UpdateUserMutationVariables, UpdateUserProps<TChildProps, TDataName>>(UpdateUserDocument, {
      alias: 'updateUser',
      ...operationOptions
    });
};

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, baseOptions);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = ApolloReactCommon.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const GetCategoriesDocument = gql`
    query GetCategories {
  dslCategories {
    ...DslCategoryFields
    subCategories {
      ...DslCategoryFields
      subCategories {
        ...DslCategoryFields
      }
    }
  }
}
    ${DslCategoryFieldsFragmentDoc}`;
export type GetCategoriesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetCategoriesQuery, GetCategoriesQueryVariables>, 'query'>;

    export const GetCategoriesComponent = (props: GetCategoriesComponentProps) => (
      <ApolloReactComponents.Query<GetCategoriesQuery, GetCategoriesQueryVariables> query={GetCategoriesDocument} {...props} />
    );
    
export type GetCategoriesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetCategoriesQuery, GetCategoriesQueryVariables>
    } & TChildProps;
export function withGetCategories<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetCategoriesQuery,
  GetCategoriesQueryVariables,
  GetCategoriesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetCategoriesQuery, GetCategoriesQueryVariables, GetCategoriesProps<TChildProps, TDataName>>(GetCategoriesDocument, {
      alias: 'getCategories',
      ...operationOptions
    });
};

/**
 * __useGetCategoriesQuery__
 *
 * To run a query within a React component, call `useGetCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCategoriesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, baseOptions);
      }
export function useGetCategoriesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, baseOptions);
        }
export type GetCategoriesQueryHookResult = ReturnType<typeof useGetCategoriesQuery>;
export type GetCategoriesLazyQueryHookResult = ReturnType<typeof useGetCategoriesLazyQuery>;
export type GetCategoriesQueryResult = ApolloReactCommon.QueryResult<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const CategoryFromPathDocument = gql`
    query CategoryFromPath($path: String!) {
  dslCategoryByPath(path: $path) {
    ...DslCategoryFields
  }
}
    ${DslCategoryFieldsFragmentDoc}`;
export type CategoryFromPathComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CategoryFromPathQuery, CategoryFromPathQueryVariables>, 'query'> & ({ variables: CategoryFromPathQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const CategoryFromPathComponent = (props: CategoryFromPathComponentProps) => (
      <ApolloReactComponents.Query<CategoryFromPathQuery, CategoryFromPathQueryVariables> query={CategoryFromPathDocument} {...props} />
    );
    
export type CategoryFromPathProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<CategoryFromPathQuery, CategoryFromPathQueryVariables>
    } & TChildProps;
export function withCategoryFromPath<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CategoryFromPathQuery,
  CategoryFromPathQueryVariables,
  CategoryFromPathProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, CategoryFromPathQuery, CategoryFromPathQueryVariables, CategoryFromPathProps<TChildProps, TDataName>>(CategoryFromPathDocument, {
      alias: 'categoryFromPath',
      ...operationOptions
    });
};

/**
 * __useCategoryFromPathQuery__
 *
 * To run a query within a React component, call `useCategoryFromPathQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryFromPathQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryFromPathQuery({
 *   variables: {
 *      path: // value for 'path'
 *   },
 * });
 */
export function useCategoryFromPathQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CategoryFromPathQuery, CategoryFromPathQueryVariables>) {
        return ApolloReactHooks.useQuery<CategoryFromPathQuery, CategoryFromPathQueryVariables>(CategoryFromPathDocument, baseOptions);
      }
export function useCategoryFromPathLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CategoryFromPathQuery, CategoryFromPathQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CategoryFromPathQuery, CategoryFromPathQueryVariables>(CategoryFromPathDocument, baseOptions);
        }
export type CategoryFromPathQueryHookResult = ReturnType<typeof useCategoryFromPathQuery>;
export type CategoryFromPathLazyQueryHookResult = ReturnType<typeof useCategoryFromPathLazyQuery>;
export type CategoryFromPathQueryResult = ApolloReactCommon.QueryResult<CategoryFromPathQuery, CategoryFromPathQueryVariables>;
export const CategoryProductsDocument = gql`
    query CategoryProducts($id: ID!, $sort: Sort, $pagination: Pagination, $filters: [ProductFilter!]) {
  dslCategoryProducts(
    id: $id
    sort: $sort
    pagination: $pagination
    filters: $filters
  ) {
    totalCount
    products {
      ...DslProductFields
    }
    filters {
      ...DslFilterFields
    }
  }
}
    ${DslProductFieldsFragmentDoc}
${DslFilterFieldsFragmentDoc}`;
export type CategoryProductsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CategoryProductsQuery, CategoryProductsQueryVariables>, 'query'> & ({ variables: CategoryProductsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const CategoryProductsComponent = (props: CategoryProductsComponentProps) => (
      <ApolloReactComponents.Query<CategoryProductsQuery, CategoryProductsQueryVariables> query={CategoryProductsDocument} {...props} />
    );
    
export type CategoryProductsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<CategoryProductsQuery, CategoryProductsQueryVariables>
    } & TChildProps;
export function withCategoryProducts<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CategoryProductsQuery,
  CategoryProductsQueryVariables,
  CategoryProductsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, CategoryProductsQuery, CategoryProductsQueryVariables, CategoryProductsProps<TChildProps, TDataName>>(CategoryProductsDocument, {
      alias: 'categoryProducts',
      ...operationOptions
    });
};

/**
 * __useCategoryProductsQuery__
 *
 * To run a query within a React component, call `useCategoryProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryProductsQuery({
 *   variables: {
 *      id: // value for 'id'
 *      sort: // value for 'sort'
 *      pagination: // value for 'pagination'
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useCategoryProductsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CategoryProductsQuery, CategoryProductsQueryVariables>) {
        return ApolloReactHooks.useQuery<CategoryProductsQuery, CategoryProductsQueryVariables>(CategoryProductsDocument, baseOptions);
      }
export function useCategoryProductsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CategoryProductsQuery, CategoryProductsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CategoryProductsQuery, CategoryProductsQueryVariables>(CategoryProductsDocument, baseOptions);
        }
export type CategoryProductsQueryHookResult = ReturnType<typeof useCategoryProductsQuery>;
export type CategoryProductsLazyQueryHookResult = ReturnType<typeof useCategoryProductsLazyQuery>;
export type CategoryProductsQueryResult = ApolloReactCommon.QueryResult<CategoryProductsQuery, CategoryProductsQueryVariables>;
export const GetContentPageDocument = gql`
    query GetContentPage($slug: String!) {
  content(params: {contentType: "content-page", slug: $slug}) {
    id
    slug
    type
    title
    body
    custom {
      images {
        url
        title
        alt
      }
    }
  }
}
    `;
export type GetContentPageComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetContentPageQuery, GetContentPageQueryVariables>, 'query'> & ({ variables: GetContentPageQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetContentPageComponent = (props: GetContentPageComponentProps) => (
      <ApolloReactComponents.Query<GetContentPageQuery, GetContentPageQueryVariables> query={GetContentPageDocument} {...props} />
    );
    
export type GetContentPageProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetContentPageQuery, GetContentPageQueryVariables>
    } & TChildProps;
export function withGetContentPage<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetContentPageQuery,
  GetContentPageQueryVariables,
  GetContentPageProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetContentPageQuery, GetContentPageQueryVariables, GetContentPageProps<TChildProps, TDataName>>(GetContentPageDocument, {
      alias: 'getContentPage',
      ...operationOptions
    });
};

/**
 * __useGetContentPageQuery__
 *
 * To run a query within a React component, call `useGetContentPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContentPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContentPageQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetContentPageQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetContentPageQuery, GetContentPageQueryVariables>) {
        return ApolloReactHooks.useQuery<GetContentPageQuery, GetContentPageQueryVariables>(GetContentPageDocument, baseOptions);
      }
export function useGetContentPageLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetContentPageQuery, GetContentPageQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetContentPageQuery, GetContentPageQueryVariables>(GetContentPageDocument, baseOptions);
        }
export type GetContentPageQueryHookResult = ReturnType<typeof useGetContentPageQuery>;
export type GetContentPageLazyQueryHookResult = ReturnType<typeof useGetContentPageLazyQuery>;
export type GetContentPageQueryResult = ApolloReactCommon.QueryResult<GetContentPageQuery, GetContentPageQueryVariables>;
export const CurrentUserWithCartDocument = gql`
    query CurrentUserWithCart {
  dslCurrentUser {
    result
    user {
      ...DslUserFields
    }
    outlet {
      ...OutletFields
    }
  }
  dslCart {
    ...DslCartFields
  }
}
    ${DslUserFieldsFragmentDoc}
${OutletFieldsFragmentDoc}
${DslCartFieldsFragmentDoc}`;
export type CurrentUserWithCartComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CurrentUserWithCartQuery, CurrentUserWithCartQueryVariables>, 'query'>;

    export const CurrentUserWithCartComponent = (props: CurrentUserWithCartComponentProps) => (
      <ApolloReactComponents.Query<CurrentUserWithCartQuery, CurrentUserWithCartQueryVariables> query={CurrentUserWithCartDocument} {...props} />
    );
    
export type CurrentUserWithCartProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<CurrentUserWithCartQuery, CurrentUserWithCartQueryVariables>
    } & TChildProps;
export function withCurrentUserWithCart<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CurrentUserWithCartQuery,
  CurrentUserWithCartQueryVariables,
  CurrentUserWithCartProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, CurrentUserWithCartQuery, CurrentUserWithCartQueryVariables, CurrentUserWithCartProps<TChildProps, TDataName>>(CurrentUserWithCartDocument, {
      alias: 'currentUserWithCart',
      ...operationOptions
    });
};

/**
 * __useCurrentUserWithCartQuery__
 *
 * To run a query within a React component, call `useCurrentUserWithCartQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserWithCartQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserWithCartQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserWithCartQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CurrentUserWithCartQuery, CurrentUserWithCartQueryVariables>) {
        return ApolloReactHooks.useQuery<CurrentUserWithCartQuery, CurrentUserWithCartQueryVariables>(CurrentUserWithCartDocument, baseOptions);
      }
export function useCurrentUserWithCartLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CurrentUserWithCartQuery, CurrentUserWithCartQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CurrentUserWithCartQuery, CurrentUserWithCartQueryVariables>(CurrentUserWithCartDocument, baseOptions);
        }
export type CurrentUserWithCartQueryHookResult = ReturnType<typeof useCurrentUserWithCartQuery>;
export type CurrentUserWithCartLazyQueryHookResult = ReturnType<typeof useCurrentUserWithCartLazyQuery>;
export type CurrentUserWithCartQueryResult = ApolloReactCommon.QueryResult<CurrentUserWithCartQuery, CurrentUserWithCartQueryVariables>;
export const OrderDetailDocument = gql`
    query OrderDetail($id: ID!) {
  order(id: $id) {
    ...Order
  }
}
    ${OrderFragmentDoc}`;
export type OrderDetailComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<OrderDetailQuery, OrderDetailQueryVariables>, 'query'> & ({ variables: OrderDetailQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const OrderDetailComponent = (props: OrderDetailComponentProps) => (
      <ApolloReactComponents.Query<OrderDetailQuery, OrderDetailQueryVariables> query={OrderDetailDocument} {...props} />
    );
    
export type OrderDetailProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<OrderDetailQuery, OrderDetailQueryVariables>
    } & TChildProps;
export function withOrderDetail<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  OrderDetailQuery,
  OrderDetailQueryVariables,
  OrderDetailProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, OrderDetailQuery, OrderDetailQueryVariables, OrderDetailProps<TChildProps, TDataName>>(OrderDetailDocument, {
      alias: 'orderDetail',
      ...operationOptions
    });
};

/**
 * __useOrderDetailQuery__
 *
 * To run a query within a React component, call `useOrderDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOrderDetailQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<OrderDetailQuery, OrderDetailQueryVariables>) {
        return ApolloReactHooks.useQuery<OrderDetailQuery, OrderDetailQueryVariables>(OrderDetailDocument, baseOptions);
      }
export function useOrderDetailLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<OrderDetailQuery, OrderDetailQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<OrderDetailQuery, OrderDetailQueryVariables>(OrderDetailDocument, baseOptions);
        }
export type OrderDetailQueryHookResult = ReturnType<typeof useOrderDetailQuery>;
export type OrderDetailLazyQueryHookResult = ReturnType<typeof useOrderDetailLazyQuery>;
export type OrderDetailQueryResult = ApolloReactCommon.QueryResult<OrderDetailQuery, OrderDetailQueryVariables>;
export const OrdersDocument = gql`
    query Orders($filters: String!, $pagination: Pagination!, $sortBy: String!) {
  orders(pagination: $pagination, params: {filters: $filters, sortBy: $sortBy}) {
    orders {
      ...OrderStub
    }
    params {
      ...Params
    }
  }
}
    ${OrderStubFragmentDoc}
${ParamsFragmentDoc}`;
export type OrdersComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<OrdersQuery, OrdersQueryVariables>, 'query'> & ({ variables: OrdersQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const OrdersComponent = (props: OrdersComponentProps) => (
      <ApolloReactComponents.Query<OrdersQuery, OrdersQueryVariables> query={OrdersDocument} {...props} />
    );
    
export type OrdersProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<OrdersQuery, OrdersQueryVariables>
    } & TChildProps;
export function withOrders<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  OrdersQuery,
  OrdersQueryVariables,
  OrdersProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, OrdersQuery, OrdersQueryVariables, OrdersProps<TChildProps, TDataName>>(OrdersDocument, {
      alias: 'orders',
      ...operationOptions
    });
};

/**
 * __useOrdersQuery__
 *
 * To run a query within a React component, call `useOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrdersQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      sortBy: // value for 'sortBy'
 *   },
 * });
 */
export function useOrdersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<OrdersQuery, OrdersQueryVariables>) {
        return ApolloReactHooks.useQuery<OrdersQuery, OrdersQueryVariables>(OrdersDocument, baseOptions);
      }
export function useOrdersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<OrdersQuery, OrdersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<OrdersQuery, OrdersQueryVariables>(OrdersDocument, baseOptions);
        }
export type OrdersQueryHookResult = ReturnType<typeof useOrdersQuery>;
export type OrdersLazyQueryHookResult = ReturnType<typeof useOrdersLazyQuery>;
export type OrdersQueryResult = ApolloReactCommon.QueryResult<OrdersQuery, OrdersQueryVariables>;
export const ProductByIdDocument = gql`
    query ProductById($id: ID!) {
  dslProductById(id: $id) {
    ...DslProductFields
  }
}
    ${DslProductFieldsFragmentDoc}`;
export type ProductByIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ProductByIdQuery, ProductByIdQueryVariables>, 'query'> & ({ variables: ProductByIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const ProductByIdComponent = (props: ProductByIdComponentProps) => (
      <ApolloReactComponents.Query<ProductByIdQuery, ProductByIdQueryVariables> query={ProductByIdDocument} {...props} />
    );
    
export type ProductByIdProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<ProductByIdQuery, ProductByIdQueryVariables>
    } & TChildProps;
export function withProductById<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ProductByIdQuery,
  ProductByIdQueryVariables,
  ProductByIdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, ProductByIdQuery, ProductByIdQueryVariables, ProductByIdProps<TChildProps, TDataName>>(ProductByIdDocument, {
      alias: 'productById',
      ...operationOptions
    });
};

/**
 * __useProductByIdQuery__
 *
 * To run a query within a React component, call `useProductByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ProductByIdQuery, ProductByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<ProductByIdQuery, ProductByIdQueryVariables>(ProductByIdDocument, baseOptions);
      }
export function useProductByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProductByIdQuery, ProductByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ProductByIdQuery, ProductByIdQueryVariables>(ProductByIdDocument, baseOptions);
        }
export type ProductByIdQueryHookResult = ReturnType<typeof useProductByIdQuery>;
export type ProductByIdLazyQueryHookResult = ReturnType<typeof useProductByIdLazyQuery>;
export type ProductByIdQueryResult = ApolloReactCommon.QueryResult<ProductByIdQuery, ProductByIdQueryVariables>;
export const ProductByPathDocument = gql`
    query ProductByPath($path: String!) {
  dslProductByPath(path: $path) {
    ...DslProductFields
  }
}
    ${DslProductFieldsFragmentDoc}`;
export type ProductByPathComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ProductByPathQuery, ProductByPathQueryVariables>, 'query'> & ({ variables: ProductByPathQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const ProductByPathComponent = (props: ProductByPathComponentProps) => (
      <ApolloReactComponents.Query<ProductByPathQuery, ProductByPathQueryVariables> query={ProductByPathDocument} {...props} />
    );
    
export type ProductByPathProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<ProductByPathQuery, ProductByPathQueryVariables>
    } & TChildProps;
export function withProductByPath<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ProductByPathQuery,
  ProductByPathQueryVariables,
  ProductByPathProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, ProductByPathQuery, ProductByPathQueryVariables, ProductByPathProps<TChildProps, TDataName>>(ProductByPathDocument, {
      alias: 'productByPath',
      ...operationOptions
    });
};

/**
 * __useProductByPathQuery__
 *
 * To run a query within a React component, call `useProductByPathQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductByPathQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductByPathQuery({
 *   variables: {
 *      path: // value for 'path'
 *   },
 * });
 */
export function useProductByPathQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ProductByPathQuery, ProductByPathQueryVariables>) {
        return ApolloReactHooks.useQuery<ProductByPathQuery, ProductByPathQueryVariables>(ProductByPathDocument, baseOptions);
      }
export function useProductByPathLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProductByPathQuery, ProductByPathQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ProductByPathQuery, ProductByPathQueryVariables>(ProductByPathDocument, baseOptions);
        }
export type ProductByPathQueryHookResult = ReturnType<typeof useProductByPathQuery>;
export type ProductByPathLazyQueryHookResult = ReturnType<typeof useProductByPathLazyQuery>;
export type ProductByPathQueryResult = ApolloReactCommon.QueryResult<ProductByPathQuery, ProductByPathQueryVariables>;
export const PromotionByTypeDocument = gql`
    query PromotionByType($type: String!) {
  getPromotionsByType(type: $type) {
    ...Promotion
  }
}
    ${PromotionFragmentDoc}`;
export type PromotionByTypeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PromotionByTypeQuery, PromotionByTypeQueryVariables>, 'query'> & ({ variables: PromotionByTypeQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const PromotionByTypeComponent = (props: PromotionByTypeComponentProps) => (
      <ApolloReactComponents.Query<PromotionByTypeQuery, PromotionByTypeQueryVariables> query={PromotionByTypeDocument} {...props} />
    );
    
export type PromotionByTypeProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<PromotionByTypeQuery, PromotionByTypeQueryVariables>
    } & TChildProps;
export function withPromotionByType<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  PromotionByTypeQuery,
  PromotionByTypeQueryVariables,
  PromotionByTypeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, PromotionByTypeQuery, PromotionByTypeQueryVariables, PromotionByTypeProps<TChildProps, TDataName>>(PromotionByTypeDocument, {
      alias: 'promotionByType',
      ...operationOptions
    });
};

/**
 * __usePromotionByTypeQuery__
 *
 * To run a query within a React component, call `usePromotionByTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `usePromotionByTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePromotionByTypeQuery({
 *   variables: {
 *      type: // value for 'type'
 *   },
 * });
 */
export function usePromotionByTypeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PromotionByTypeQuery, PromotionByTypeQueryVariables>) {
        return ApolloReactHooks.useQuery<PromotionByTypeQuery, PromotionByTypeQueryVariables>(PromotionByTypeDocument, baseOptions);
      }
export function usePromotionByTypeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PromotionByTypeQuery, PromotionByTypeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PromotionByTypeQuery, PromotionByTypeQueryVariables>(PromotionByTypeDocument, baseOptions);
        }
export type PromotionByTypeQueryHookResult = ReturnType<typeof usePromotionByTypeQuery>;
export type PromotionByTypeLazyQueryHookResult = ReturnType<typeof usePromotionByTypeLazyQuery>;
export type PromotionByTypeQueryResult = ApolloReactCommon.QueryResult<PromotionByTypeQuery, PromotionByTypeQueryVariables>;
export const GetPromotionTypesDocument = gql`
    query GetPromotionTypes {
  promotionTypes {
    name
    displayName
    description
  }
}
    `;
export type GetPromotionTypesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetPromotionTypesQuery, GetPromotionTypesQueryVariables>, 'query'>;

    export const GetPromotionTypesComponent = (props: GetPromotionTypesComponentProps) => (
      <ApolloReactComponents.Query<GetPromotionTypesQuery, GetPromotionTypesQueryVariables> query={GetPromotionTypesDocument} {...props} />
    );
    
export type GetPromotionTypesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPromotionTypesQuery, GetPromotionTypesQueryVariables>
    } & TChildProps;
export function withGetPromotionTypes<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPromotionTypesQuery,
  GetPromotionTypesQueryVariables,
  GetPromotionTypesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPromotionTypesQuery, GetPromotionTypesQueryVariables, GetPromotionTypesProps<TChildProps, TDataName>>(GetPromotionTypesDocument, {
      alias: 'getPromotionTypes',
      ...operationOptions
    });
};

/**
 * __useGetPromotionTypesQuery__
 *
 * To run a query within a React component, call `useGetPromotionTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPromotionTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPromotionTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPromotionTypesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetPromotionTypesQuery, GetPromotionTypesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetPromotionTypesQuery, GetPromotionTypesQueryVariables>(GetPromotionTypesDocument, baseOptions);
      }
export function useGetPromotionTypesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPromotionTypesQuery, GetPromotionTypesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetPromotionTypesQuery, GetPromotionTypesQueryVariables>(GetPromotionTypesDocument, baseOptions);
        }
export type GetPromotionTypesQueryHookResult = ReturnType<typeof useGetPromotionTypesQuery>;
export type GetPromotionTypesLazyQueryHookResult = ReturnType<typeof useGetPromotionTypesLazyQuery>;
export type GetPromotionTypesQueryResult = ApolloReactCommon.QueryResult<GetPromotionTypesQuery, GetPromotionTypesQueryVariables>;
export const GetPromotionsDocument = gql`
    query GetPromotions {
  promotions {
    ...Promotion
  }
}
    ${PromotionFragmentDoc}`;
export type GetPromotionsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetPromotionsQuery, GetPromotionsQueryVariables>, 'query'>;

    export const GetPromotionsComponent = (props: GetPromotionsComponentProps) => (
      <ApolloReactComponents.Query<GetPromotionsQuery, GetPromotionsQueryVariables> query={GetPromotionsDocument} {...props} />
    );
    
export type GetPromotionsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPromotionsQuery, GetPromotionsQueryVariables>
    } & TChildProps;
export function withGetPromotions<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPromotionsQuery,
  GetPromotionsQueryVariables,
  GetPromotionsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPromotionsQuery, GetPromotionsQueryVariables, GetPromotionsProps<TChildProps, TDataName>>(GetPromotionsDocument, {
      alias: 'getPromotions',
      ...operationOptions
    });
};

/**
 * __useGetPromotionsQuery__
 *
 * To run a query within a React component, call `useGetPromotionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPromotionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPromotionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPromotionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetPromotionsQuery, GetPromotionsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetPromotionsQuery, GetPromotionsQueryVariables>(GetPromotionsDocument, baseOptions);
      }
export function useGetPromotionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPromotionsQuery, GetPromotionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetPromotionsQuery, GetPromotionsQueryVariables>(GetPromotionsDocument, baseOptions);
        }
export type GetPromotionsQueryHookResult = ReturnType<typeof useGetPromotionsQuery>;
export type GetPromotionsLazyQueryHookResult = ReturnType<typeof useGetPromotionsLazyQuery>;
export type GetPromotionsQueryResult = ApolloReactCommon.QueryResult<GetPromotionsQuery, GetPromotionsQueryVariables>;
export const RecentlyOrderedProductsDocument = gql`
    query RecentlyOrderedProducts($pagination: Pagination) {
  dslRecentlyOrderedProducts(pagination: $pagination) {
    products {
      ...DslProductFields
    }
  }
}
    ${DslProductFieldsFragmentDoc}`;
export type RecentlyOrderedProductsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<RecentlyOrderedProductsQuery, RecentlyOrderedProductsQueryVariables>, 'query'>;

    export const RecentlyOrderedProductsComponent = (props: RecentlyOrderedProductsComponentProps) => (
      <ApolloReactComponents.Query<RecentlyOrderedProductsQuery, RecentlyOrderedProductsQueryVariables> query={RecentlyOrderedProductsDocument} {...props} />
    );
    
export type RecentlyOrderedProductsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<RecentlyOrderedProductsQuery, RecentlyOrderedProductsQueryVariables>
    } & TChildProps;
export function withRecentlyOrderedProducts<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RecentlyOrderedProductsQuery,
  RecentlyOrderedProductsQueryVariables,
  RecentlyOrderedProductsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, RecentlyOrderedProductsQuery, RecentlyOrderedProductsQueryVariables, RecentlyOrderedProductsProps<TChildProps, TDataName>>(RecentlyOrderedProductsDocument, {
      alias: 'recentlyOrderedProducts',
      ...operationOptions
    });
};

/**
 * __useRecentlyOrderedProductsQuery__
 *
 * To run a query within a React component, call `useRecentlyOrderedProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecentlyOrderedProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecentlyOrderedProductsQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useRecentlyOrderedProductsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<RecentlyOrderedProductsQuery, RecentlyOrderedProductsQueryVariables>) {
        return ApolloReactHooks.useQuery<RecentlyOrderedProductsQuery, RecentlyOrderedProductsQueryVariables>(RecentlyOrderedProductsDocument, baseOptions);
      }
export function useRecentlyOrderedProductsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<RecentlyOrderedProductsQuery, RecentlyOrderedProductsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<RecentlyOrderedProductsQuery, RecentlyOrderedProductsQueryVariables>(RecentlyOrderedProductsDocument, baseOptions);
        }
export type RecentlyOrderedProductsQueryHookResult = ReturnType<typeof useRecentlyOrderedProductsQuery>;
export type RecentlyOrderedProductsLazyQueryHookResult = ReturnType<typeof useRecentlyOrderedProductsLazyQuery>;
export type RecentlyOrderedProductsQueryResult = ApolloReactCommon.QueryResult<RecentlyOrderedProductsQuery, RecentlyOrderedProductsQueryVariables>;
export const SearchProductsFullDocument = gql`
    query SearchProductsFull($filters: String!, $sortBy: String!, $sortOrder: String!, $search: String!, $pagination: Pagination!) {
  products(
    params: {filters: $filters, sortBy: $sortBy, sortOrder: $sortOrder, searchQuery: $search, imageSizes: ["category"]}
    pagination: $pagination
  ) {
    products {
      ...Product
    }
    params {
      ...Params
    }
  }
  productSearchFilters(params: {searchQuery: $search}) {
    ...Filter
  }
}
    ${ProductFragmentDoc}
${ParamsFragmentDoc}
${FilterFragmentDoc}`;
export type SearchProductsFullComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SearchProductsFullQuery, SearchProductsFullQueryVariables>, 'query'> & ({ variables: SearchProductsFullQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SearchProductsFullComponent = (props: SearchProductsFullComponentProps) => (
      <ApolloReactComponents.Query<SearchProductsFullQuery, SearchProductsFullQueryVariables> query={SearchProductsFullDocument} {...props} />
    );
    
export type SearchProductsFullProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SearchProductsFullQuery, SearchProductsFullQueryVariables>
    } & TChildProps;
export function withSearchProductsFull<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SearchProductsFullQuery,
  SearchProductsFullQueryVariables,
  SearchProductsFullProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SearchProductsFullQuery, SearchProductsFullQueryVariables, SearchProductsFullProps<TChildProps, TDataName>>(SearchProductsFullDocument, {
      alias: 'searchProductsFull',
      ...operationOptions
    });
};

/**
 * __useSearchProductsFullQuery__
 *
 * To run a query within a React component, call `useSearchProductsFullQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchProductsFullQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchProductsFullQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      sortBy: // value for 'sortBy'
 *      sortOrder: // value for 'sortOrder'
 *      search: // value for 'search'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useSearchProductsFullQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SearchProductsFullQuery, SearchProductsFullQueryVariables>) {
        return ApolloReactHooks.useQuery<SearchProductsFullQuery, SearchProductsFullQueryVariables>(SearchProductsFullDocument, baseOptions);
      }
export function useSearchProductsFullLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SearchProductsFullQuery, SearchProductsFullQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SearchProductsFullQuery, SearchProductsFullQueryVariables>(SearchProductsFullDocument, baseOptions);
        }
export type SearchProductsFullQueryHookResult = ReturnType<typeof useSearchProductsFullQuery>;
export type SearchProductsFullLazyQueryHookResult = ReturnType<typeof useSearchProductsFullLazyQuery>;
export type SearchProductsFullQueryResult = ApolloReactCommon.QueryResult<SearchProductsFullQuery, SearchProductsFullQueryVariables>;
export const SearchProductsDocument = gql`
    query SearchProducts($searchQuery: String!, $sort: Sort, $pagination: Pagination, $filters: [ProductFilter!]) {
  dslProductSearch(
    searchQuery: $searchQuery
    sort: $sort
    pagination: $pagination
    filters: $filters
  ) {
    totalCount
    products {
      ...DslProductFields
    }
    filters {
      ...DslFilterFields
    }
  }
}
    ${DslProductFieldsFragmentDoc}
${DslFilterFieldsFragmentDoc}`;
export type SearchProductsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SearchProductsQuery, SearchProductsQueryVariables>, 'query'> & ({ variables: SearchProductsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SearchProductsComponent = (props: SearchProductsComponentProps) => (
      <ApolloReactComponents.Query<SearchProductsQuery, SearchProductsQueryVariables> query={SearchProductsDocument} {...props} />
    );
    
export type SearchProductsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SearchProductsQuery, SearchProductsQueryVariables>
    } & TChildProps;
export function withSearchProducts<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SearchProductsQuery,
  SearchProductsQueryVariables,
  SearchProductsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SearchProductsQuery, SearchProductsQueryVariables, SearchProductsProps<TChildProps, TDataName>>(SearchProductsDocument, {
      alias: 'searchProducts',
      ...operationOptions
    });
};

/**
 * __useSearchProductsQuery__
 *
 * To run a query within a React component, call `useSearchProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchProductsQuery({
 *   variables: {
 *      searchQuery: // value for 'searchQuery'
 *      sort: // value for 'sort'
 *      pagination: // value for 'pagination'
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useSearchProductsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SearchProductsQuery, SearchProductsQueryVariables>) {
        return ApolloReactHooks.useQuery<SearchProductsQuery, SearchProductsQueryVariables>(SearchProductsDocument, baseOptions);
      }
export function useSearchProductsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SearchProductsQuery, SearchProductsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SearchProductsQuery, SearchProductsQueryVariables>(SearchProductsDocument, baseOptions);
        }
export type SearchProductsQueryHookResult = ReturnType<typeof useSearchProductsQuery>;
export type SearchProductsLazyQueryHookResult = ReturnType<typeof useSearchProductsLazyQuery>;
export type SearchProductsQueryResult = ApolloReactCommon.QueryResult<SearchProductsQuery, SearchProductsQueryVariables>;
export const WishlistDetailDocument = gql`
    query WishlistDetail($id: String!) {
  wishlistDetail(id: $id) {
    ...Wishlist
  }
}
    ${WishlistFragmentDoc}`;
export type WishlistDetailComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<WishlistDetailQuery, WishlistDetailQueryVariables>, 'query'> & ({ variables: WishlistDetailQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const WishlistDetailComponent = (props: WishlistDetailComponentProps) => (
      <ApolloReactComponents.Query<WishlistDetailQuery, WishlistDetailQueryVariables> query={WishlistDetailDocument} {...props} />
    );
    
export type WishlistDetailProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<WishlistDetailQuery, WishlistDetailQueryVariables>
    } & TChildProps;
export function withWishlistDetail<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  WishlistDetailQuery,
  WishlistDetailQueryVariables,
  WishlistDetailProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, WishlistDetailQuery, WishlistDetailQueryVariables, WishlistDetailProps<TChildProps, TDataName>>(WishlistDetailDocument, {
      alias: 'wishlistDetail',
      ...operationOptions
    });
};

/**
 * __useWishlistDetailQuery__
 *
 * To run a query within a React component, call `useWishlistDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useWishlistDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWishlistDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useWishlistDetailQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<WishlistDetailQuery, WishlistDetailQueryVariables>) {
        return ApolloReactHooks.useQuery<WishlistDetailQuery, WishlistDetailQueryVariables>(WishlistDetailDocument, baseOptions);
      }
export function useWishlistDetailLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<WishlistDetailQuery, WishlistDetailQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<WishlistDetailQuery, WishlistDetailQueryVariables>(WishlistDetailDocument, baseOptions);
        }
export type WishlistDetailQueryHookResult = ReturnType<typeof useWishlistDetailQuery>;
export type WishlistDetailLazyQueryHookResult = ReturnType<typeof useWishlistDetailLazyQuery>;
export type WishlistDetailQueryResult = ApolloReactCommon.QueryResult<WishlistDetailQuery, WishlistDetailQueryVariables>;
export const WishlistsDocument = gql`
    query Wishlists {
  wishlists {
    ...Wishlist
  }
}
    ${WishlistFragmentDoc}`;
export type WishlistsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<WishlistsQuery, WishlistsQueryVariables>, 'query'>;

    export const WishlistsComponent = (props: WishlistsComponentProps) => (
      <ApolloReactComponents.Query<WishlistsQuery, WishlistsQueryVariables> query={WishlistsDocument} {...props} />
    );
    
export type WishlistsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<WishlistsQuery, WishlistsQueryVariables>
    } & TChildProps;
export function withWishlists<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  WishlistsQuery,
  WishlistsQueryVariables,
  WishlistsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, WishlistsQuery, WishlistsQueryVariables, WishlistsProps<TChildProps, TDataName>>(WishlistsDocument, {
      alias: 'wishlists',
      ...operationOptions
    });
};

/**
 * __useWishlistsQuery__
 *
 * To run a query within a React component, call `useWishlistsQuery` and pass it any options that fit your needs.
 * When your component renders, `useWishlistsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWishlistsQuery({
 *   variables: {
 *   },
 * });
 */
export function useWishlistsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<WishlistsQuery, WishlistsQueryVariables>) {
        return ApolloReactHooks.useQuery<WishlistsQuery, WishlistsQueryVariables>(WishlistsDocument, baseOptions);
      }
export function useWishlistsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<WishlistsQuery, WishlistsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<WishlistsQuery, WishlistsQueryVariables>(WishlistsDocument, baseOptions);
        }
export type WishlistsQueryHookResult = ReturnType<typeof useWishlistsQuery>;
export type WishlistsLazyQueryHookResult = ReturnType<typeof useWishlistsLazyQuery>;
export type WishlistsQueryResult = ApolloReactCommon.QueryResult<WishlistsQuery, WishlistsQueryVariables>;