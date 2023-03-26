import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
// import { selectError, selectIsLoading } from 'redux/selectors';
import { Layout } from './Layout';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/authOperation';
import { useAuth } from 'hooks/useAuth';

const Home = lazy(() => import('../pages/Home/Home'));
const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  const { isRefreshing } = useAuth();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="contacts" component={<Register />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="contacts" component={<Login />} />
          }
        />
        <Route
          path="contacts"
          element={<PrivateRoute redirectTo="login" component={<Contacts />} />}
        />
      </Route>
    </Routes>
  );

  // return (
  //   <Phonebook>
  //     <TitlePhonebook>Phonebook</TitlePhonebook>
  //     <ContactForm />
  //     {isLoading && !error && <b>Request in progress...</b>}
  //     <ContactTitle>Contacts</ContactTitle>
  //     <Filter />
  //     <ContactList />
  //   </Phonebook>
  // );
};

// import { useEffect, lazy } from 'react';
// import { useDispatch } from 'react-redux';
// import { Route, Routes } from 'react-router-dom';
// import { Layout } from './Layout';
// import { PrivateRoute } from './PrivateRoute';
// import { RestrictedRoute } from './RestrictedRoute';
// import { refreshUser } from 'redux/auth/operations';
// import { useAuth } from 'hooks';

// const HomePage = lazy(() => import('../pages/Home'));
// const RegisterPage = lazy(() => import('../pages/Register'));
// const LoginPage = lazy(() => import('../pages/Login'));
// const Contacts = lazy(() => import('../pages/Contacts'));

// export const App = () => {
// const dispatch = useDispatch();
// const { isRefreshing } = useAuth();

// useEffect(() => {
//   dispatch(refreshUser());
// }, [dispatch]);

// return isRefreshing ? (
//   <b>Refreshing user...</b>
// ) : (
//   <Routes>
//     <Route path="/" element={<Layout />}>
//       <Route index element={<HomePage />} />
//       <Route
//         path="/register"
//         element={
//           <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
//         }
//       />
//       <Route
//         path="/login"
//         element={
//           <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
//         }
//       />
//       <Route
//         path="/tasks"
//         element={
//           <PrivateRoute redirectTo="/login" component={<TasksPage />} />
//         }
//       />
//     </Route>
//   </Routes>
// );
// };
