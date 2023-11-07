import {
  Box,
  Button,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { api } from "../../utils/api"

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = async (values) => {
    try {
      const requestBody = JSON.parse(JSON.stringify({"username": values.username, "password": values.password}));
      const response = await api.post("/login.php", requestBody);
      sessionStorage.setItem("role", response.data.role.toString());
      sessionStorage.setItem("name", response.data.name.toString());
      window.location.href = "/";
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <Box m="auto">
      <Header
        title="Anmelden"
        subtitle="Melden Sie sich mit Ihrem Konto ein."
      />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                autoComplete="username"
                label="Benutzername"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.username}
                name="username"
                error={!!touched.username && !!errors.username}
                helperText={touched.username && errors.username}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="password"
                autoComplete="current-password"
                label="Passwort"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
            <Box
              display="flex"
              justifyContent="start"
              mt="20px"
            >
              <Button
                type="submit"
                color="secondary"
                variant="contained"
              >
                Anmelden
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

// CHECKING FOR VALIDATION
// const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%.]).{8,24}$/;
const usernameRegExp = /^[A-z][A-z0-9-_]{2,23}$/;

const checkoutSchema = yup.object().shape({
  username: yup.string().matches(usernameRegExp, "Geben Sie \"Coach\" ein für die Trainieranschicht").required("notwendig"),
  password: yup.string().matches(usernameRegExp, "Passwort muss zwischen 8-24 Zeichen sein, mindestens ein Großbuchstabe, ein Kleinbuchstabe, eine Zahl und ein Sonderzeichen enthalten")
});
const initialValues = {
  username: "",
  password: "",
};

export default Form;
