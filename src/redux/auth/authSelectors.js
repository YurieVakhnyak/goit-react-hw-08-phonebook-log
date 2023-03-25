// export const selectIsLoggedIn = state => state.auth.isLoggedIn;

// export const selectUsername = state => state.auth.user.name;

// const authSelectors = {
//   selectIsLoggedIn,
//   selectUsername,
// };

// export default authSelectors;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;
