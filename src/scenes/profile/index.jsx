import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const Invoices = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const handleFormSubmit = (values) => {
        console.log(values);
    };

    return (
        <Box m="20px">
            <Header title="Profil" subtitle="Willkommen in Ihrem Profil" />

            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={checkoutSchema}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleBlur,
                      handleChange,
                      handleSubmit,
                  }) => (
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
                                label="Vorname"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.firstName}
                                name="firstName"
                                error={!!touched.firstName && !!errors.firstName}
                                helperText={touched.firstName && errors.firstName}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Nachname"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.lastName}
                                name="lastName"
                                error={!!touched.lastName && !!errors.lastName}
                                helperText={touched.lastName && errors.lastName}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Telefonnummer"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.phone}
                                name="phone"
                                error={!!touched.phone && !!errors.phone}
                                helperText={touched.phone && errors.phone}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="PLZ"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.zip}
                                name="zip"
                                error={!!touched.zip && !!errors.zip}
                                helperText={touched.zip && errors.zip}
                                sx={{ gridColumn: "span 2" }}
                            />

                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Adresse"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.address}
                                name="address"
                                error={!!touched.address && !!errors.address}
                                helperText={touched.address && errors.address}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Verein"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.club}
                                name="club"
                                error={!!touched.club && !!errors.club}
                                helperText={touched.club && errors.club}
                                sx={{ gridColumn: "span 2" }}
                            />
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            <Button type="submit" color="secondary" variant="contained">
                                Speichern
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    );
};
const nameRegExp = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const zipRegExp = /^\d{4}$/;

const checkoutSchema = yup.object().shape({
    firstName: yup
        .string()
        .matches(nameRegExp, "Nur Buchstaben erlaubt")
        .required("auszufüllen"),
    lastName: yup
        .string()
        .matches(nameRegExp, "Nur Buchstaben erlaubt")
        .required("auszufüllen"),
    email: yup.string().email("invalid email").required("auszufüllen"),
    phone: yup
        .string()
        .matches(phoneRegExp, "Telefonnummer ist ungültig")
        .required("auszufüllen"),
    address: yup.string().required("auszufüllen"),
    zip: yup
        .string()
        .matches(zipRegExp, "Nur 4 Ziffern erlaubt")
        .required("auszufüllen"),
    club: yup.string().required("auszufüllen"),
});
const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    club: "",
};

export default Invoices;