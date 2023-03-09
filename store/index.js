import axios from "axios";
import Cookie from "js-cookie";

export const state = () => ({
  booksData: [],
  wishlistBooksData: [],
  token: null,
  userData: null,
});

export const getters = {
  getBooksData(state) {
    return state.booksData;
  },

  getWishlistBooksData(state) {
    return state.wishlistBooksData;
  },

  iswishlistBooksData(state){
    return state.wishlistBooksData.length === 0
  },

  detailBooksData: (state) => (id) => {
    return state.booksData.find((book) => book.id === id);
  },

  isAuthenticated(state) {
    return state.token !== null;
  },

  userId(state) {
    return state.userData.userId;
  },
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

  setUserData(state, payload) {
    state.userData = payload;
  },

  deleteBookData(state, payload) {
    const book = state.booksData.filter((book) => book.id !== payload);
    state.booksData = book;
  },
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

  authenticateUser({ commit }, authData) {
    let WebAPIKey = "AIzaSyBV4Aw9RePLtyl3AIj43sPs6etE6ktnivU";
    let authUrl = authData.isLogin
      ? "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
      : "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";

    return axios
      .post(authUrl + WebAPIKey, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true,
        displayName: authData.displayName,
      })
      .then((response) => {
        commit("setToken", response.data.idToken);
        commit("setUserData", {
          username: response.data.displayName,
          userId: response.data.localId,
          email: response.data.email,
        });

        // Menyimpan Token pada local storage dan cookies
        localStorage.setItem("token", response.data.idToken);
        Cookie.set("jwt", response.data.idToken);
        // Menyimpan data expires pada local storage dan cookie
        localStorage.setItem(
          "tokenExpiration",
          new Date().getTime() + Number.parseInt(response.data.expiresIn) * 1000
        );
        Cookie.set(
          "expirationDate",
          new Date().getTime() + Number.parseInt(response.data.expiresIn) * 1000
        );

        const userData = {
          username: response.data.displayName,
          userId: response.data.localId,
          email: response.data.email,
        };
        localStorage.setItem("user", JSON.stringify(userData));
        Cookie.set("acc_user", JSON.stringify(userData));
      })
      .catch((error) => console.log(error));
  },

  initAuth({ commit, dispatch }, req) {
    let token;
    let user;
    let expirationDate;

    if (req) {
      if (!req.headers.cookie) {
        return;
      }
      const jwtCookie = req.headers.cookie
        .split(";")
        .find((c) => c.trim().startsWith("jwt="));
      const accUserCookie = req.headers.cookie
        .split(";")
        .find((c) => c.trim().startsWith("acc_user="));
      console.log(accUserCookie);
      const userCookie = accUserCookie.substr(accUserCookie.indexOf("=") + 1);
      user = JSON.parse(decodeURIComponent(userCookie));
      if (!jwtCookie) {
        return;
      }
      token = jwtCookie.split("=")[1];
      expirationDate = req.headers.cookie
        .split(";")
        .find((c) => c.trim().startsWith("expirationDate="))
        .split("=")[1];
    } else {
      token = localStorage.getItem("token");
      user = JSON.parse(localStorage.getItem("user"));
      expirationDate = localStorage.getItem("tokenExpiration");
    }
    if (new Date().getTime() > +expirationDate || !token) {
        console.log("No token or invalid token");
        dispatch("logout");
        return;
    }
    commit("setToken", token);
    commit("setUserData", user);
    console.log(user);
  },

  signout({ commit }) {
    commit("setToken", null);
    Cookie.remove("jwt");
    Cookie.remove("acc_user");
    if (process.client) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  },

  getBook({ commit}) {
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

  deleteBooksData({ commit, state }, id) {
    return axios
      .delete(
        `https://recall-nuxtjs-theory-default-rtdb.asia-southeast1.firebasedatabase.app/booksData/${id}.json?auth=${state.token}`
      )
      .then((response) => commit("deleteBookData", id));
  },

  updateBooksData({dispatch, state}, book){
    return axios
           .put(`https://recall-nuxtjs-theory-default-rtdb.asia-southeast1.firebasedatabase.app/booksData/${book.id}.json?auth=${state.token}`,
                book.newProductItem
           ).then((res) => dispatch("getBook"))
  }
};
