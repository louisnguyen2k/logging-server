export const API_CODE = {
  SUCCESS: { code: 1, message: 'success.' },
  ERROR: { code: 0, message: 'error.' },
  DATA_EXIST: { code: 3, message: 'data existed.' },
  DATA_NOT_EXIST: { code: 4, message: 'data not existed.' },
  INVALID_PARAM: { code: 5, message: 'invalid param.' },
  UNAUTHORIZED: { code: 401, message: 'unauthorized.' },
  TOKEN_EXPIRED: { code: 403, message: 'token exprise.' },
  NOT_FOUND: { code: 404, message: 'not found.' },
  SERVER_INTERNAL: { code: 500, message: 'server internal.' },
};

export const IS_ACTIVE = {
  ACTIVE: 1,
  INACTIVE: 0,
};
export const IS_VERIFY = {
  VERIFY: 1,
  INVERIFY: 0,
};
export const IS_BLOCK = {
  UNBLOCK: 1,
  BLOCK: 0,
};
export const FOLLOW_STATUS = {
  FOLLOW: 1,
  UNFOLLOW: 0,
};
export const IS_STATUS = {
  STATUS: 1,
  UNSTATUS: 0,
};
export const IS_MUTE = {
  MUTE: 0,
  UNMUTE: 1,
};
export const IS_LEAVE = {
  UNLEAVE: 1,
  LEAVE: 0,
};
export const IS_PUBLIC = {
  PUBLIC: 1,
  UNPUBLIC: 0,
};

export const MEDIA_TYPE = {
  IMAGE: 1,
  VIDEO: 2,
};
export const GENDER = {
  UNDEFINED: null,
  MALE: 1,
  FEMALE: 0,
};
