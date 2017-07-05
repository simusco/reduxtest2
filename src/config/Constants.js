export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const CHARGE = {
  loadCharges:{
      request:'charge/loadCharges/request',
      success:'charge/loadCharges/success',
      error:'charge/loadCharges/error',
  }
};

export const KEYWORD = {
    loadKeywords:{
        request:'keyword/loadKeywords/request',
        success:'keyword/loadKeywords/success',
        error:'keyword/loadKeywords/error',
    },
    deleteKeyword:{
        request:'keyword/deleteKeyword/request',
        success:'keyword/deleteKeyword/success',
        error:'keyword/deleteKeyword/error',
    },
    addToBlack:{
        request:'keyword/addToBlack/request',
        success:'keyword/addToBlack/success',
        error:'keyword/addToBlack/error',
    },
    loadDisabledUsers:{
        request:'keyword/loadDisabledUsers/request',
        success:'keyword/loadDisabledUsers/success',
        error:'keyword/loadDisabledUsers/error',
    },
};