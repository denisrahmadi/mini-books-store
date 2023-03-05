import axios from "axios";

export const state = () => ({
  booksData: [],
  wishlistBooksData: [],
  token: null,
  userData: null
});




export const getters = {
  getBooksData(state) {
    return state.booksData;
  },

  getWishlistBooksData(state) {
    return state.wishlistBooksData;
  },

  detailBooksData: (state) => (id) => {
    return state.booksData.find((book) => book.id === id);
  },

  isAuthenticated(state) {
    return state.token !== null
  },

  userId(state){
    return state.userData.userId
  }
};



export const mutations = {
  addNewBooksData(state, payload) {
    return state.booksData.push(payload);
  },

  addWishlistBooksData(state, payload) {
    return state.wishlistBooksData.push(payload);
  },

  setBooksData(state, payload) {
    state.booksData = payload;
  },

  setToken(state, payload) {
    state.token = payload;
  },

  setUserData(state, payload){
    state.userData = payload
  }
};




export const actions = {
  nuxtServerInit({ commit }) {
    return axios
      .get(
        "https://recall-nuxtjs-theory-default-rtdb.asia-southeast1.firebasedatabase.app/booksData.json"
      )
      .then((response) => {
        const booksDataArray = [];
        for (const key in response.data) {
          booksDataArray.push({ ...response.data[key], id: key });
        }
        commit("setBooksData", booksDataArray);
      })
      .catch((e) => context.error(e));
  },
  addNewBooksData({ commit, state }, books) {
    return axios
      .post(
        `https://recall-nuxtjs-theory-default-rtdb.asia-southeast1.firebasedatabase.app/booksData.json?auth=${state.token}`,
        { ...books, userId: state.userData.userId }
      )
      .then((response) => {
        commit("addNewBooksData", { ...books, userId: state.userData.userId });
      });
  },
  authenticateUser({commit}, authData){
  	let WebAPIKey = "AIzaSyBV4Aw9RePLtyl3AIj43sPs6etE6ktnivU"
    let authUrl = authData.isLogin
                  ? "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
                  : "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="

    return axios
                .post(authUrl + WebAPIKey, {
                    email: authData.email,
                    password: authData.password,
                    returnSecureToken: true,
                    displayName: authData.displayName
                })
                .then(response => {
                        commit("setToken", response.data.idToken)
                        commit("setUserData", {
                          username: response.data.displayName,
                          userId: response.data.localId,
                          email: response.data.email
                        })
                      })
                .catch(error => console.log(error))
  }
};