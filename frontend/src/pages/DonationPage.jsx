import React from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import donationBg from "../assets/welcome-img.webp"; // Background for hero section
import Footer from "./Footer"; // Assuming your Footer component is here
import razorpayLogo from "../assets/pow-razorpay.png";

// Theme matching your site
const theme = createTheme({
  palette: {
    primary: {
      main: "#2ECC71", // Emerald Green
    },
    secondary: {
      main: "#F1C40F", // Sunflower Yellow
    },
    background: {
      default: "#FFFFFF", // Clean white
    },
    text: {
      primary: "#34495E", // Dark Slate
    },
    donation: {
      main: "#3498DB", // Bright Blue for donation section
      accent: "#E74C3C", // Vibrant Red for emphasis
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: { fontWeight: 800 },
    h3: { fontWeight: 700 },
    body1: { fontWeight: 400 },
  },
});

function Donation() {
  // Donation amounts with corresponding cause phrases
  const donations = [
    { amount: 7500, cause: "Fund a Child’s Education for a Year" },
    { amount: 5000, cause: "Provide Healthcare to a Family" },
    { amount: 2500, cause: "Supply Clean Water for a Month" },
    { amount: 1500, cause: "Gift a School Uniform & Books" },
    { amount: 1000, cause: "Feed a Child for a Month" },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "background.default",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Hero Section */}
        <Box
          sx={{
            position: "relative",
            height: "100vh",
            width: "100vw",
            backgroundImage: `url(${donationBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
            "&:before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(to bottom, rgba(52, 73, 94, 0.7), rgba(52, 73, 94, 0.3))",
              zIndex: 1,
            },
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              color: "#F1C40F",
              textAlign: "center",
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
              textShadow: "4px 4px 12px rgba(0,0,0,0.7)",
              zIndex: 2,
              px: { xs: 2, sm: 3, md: 4 },
              lineHeight: 1.2,
              animation: "fadeIn 2s ease-in-out",
              "@keyframes fadeIn": {
                "0%": { opacity: 0, transform: "translateY(30px)" },
                "100%": { opacity: 1, transform: "translateY(0)" },
              },
            }}
          >
            BADALTE BHARAT KI NAYI TASVEER
          </Typography>
        </Box>

        {/* Donation Appeal Section */}
        <Box
          sx={{
            py: { xs: 6, md: 10 },
            bgcolor: "#F7F9FC",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Container maxWidth="lg">
            {/* Fixed Donation Amounts Section */}
            <Box sx={{ mb: 6 }}>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  textAlign: "center",
                  color: "donation.main",
                  mb: 4,
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  fontWeight: 600,
                  letterSpacing: "0.5px",
                  textShadow: "1px 1px 3px rgba(0,0,0,0.1)",
                }}
              >
                Make an Impact Today
              </Typography>
              <Grid container spacing={2} justifyContent="center">
                {donations.map(({ amount, cause }) => (
                  <Grid item xs={6} sm={4} md={2.4} key={amount}>
                    <Card
                      sx={{
                        borderRadius: 3,
                        boxShadow: "0px 6px 18px rgba(0,0,0,0.12)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-6px)",
                          boxShadow: "0px 12px 25px rgba(0,0,0,0.18)",
                          bgcolor: "#F0F8FF", // Light blue on hover
                        },
                        bgcolor: "#FFFFFF",
                        borderTop: "5px solid #3498DB",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <CardContent
                        sx={{
                          textAlign: "center",
                          py: 3,
                          px: 1.5,
                        }}
                      >
                        <Typography
                          variant="h5"
                          sx={{
                            color: "donation.accent",
                            fontSize: { xs: "1.75rem", md: "2rem" },
                            fontWeight: 700,
                            mb: 1,
                            lineHeight: 1.2,
                          }}
                        >
                          ₹{amount}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "text.primary",
                            fontSize: { xs: "0.85rem", md: "0.95rem" },
                            fontWeight: 500,
                            mb: 2,
                            px: 1,
                            lineHeight: 1.4,
                            minHeight: "2.8rem", // Ensures consistent height
                          }}
                        >
                          {cause}
                        </Typography>
                        <Button
                          variant="contained"
                          href="https://pages.razorpay.com/pl_NUcVhpQzK8rI1b/view"
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            bgcolor: "donation.main",
                            color: "#FFFFFF",
                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                            fontWeight: 600,
                            borderRadius: 20,
                            px: 2.5,
                            py: 0.75,
                            "&:hover": {
                              bgcolor: "#2980B9", // Darker blue on hover
                              transform: "scale(1.05)",
                            },
                          }}
                        >
                          Donate Now
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* Together, Let’s Make a Difference Section */}
            <Typography
              variant="h3"
              component="h2"
              sx={{
                textAlign: "center",
                color: "primary.main",
                mb: 4,
                fontSize: { xs: "1.75rem", md: "2.5rem" },
                letterSpacing: "1px",
                textShadow: "1px 1px 4px rgba(0,0,0,0.2)",
                animation: "fadeInUp 1s ease-in-out",
                "@keyframes fadeInUp": {
                  "0%": { opacity: 0, transform: "translateY(20px)" },
                  "100%": { opacity: 1, transform: "translateY(0)" },
                },
              }}
            >
              Together, Let’s Make a Difference!
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.primary",
                fontSize: { xs: "1rem", md: "1.25rem" },
                lineHeight: 1.8,
                textAlign: "justify",
                mb: 4,
                animation: "fadeInUp 1.5s ease-in-out",
              }}
            >
              <strong>Dear Supporters and Friends,</strong>
              <br />
              <br />
              NayePankh Foundation was founded with a simple yet powerful vision - to uplift the underprivileged and marginalized communities and provide them with access to education, healthcare, and basic necessities that we often take for granted. We strongly believe that every child has the right to dream and achieve their aspirations, irrespective of their socio-economic background. We have been working relentlessly towards this goal, but we need <span style={{ color: "#2ECC71", fontWeight: 700 }}>your support</span> to continue our efforts and make a lasting impact.
              <br />
              <br />
              As you read this, countless children and families are struggling to survive without the most basic necessities. They lack access to clean water, sanitation, and proper healthcare facilities. Most of them are unable to attend school due to financial constraints or lack of infrastructure. They are trapped in a cycle of poverty and hopelessness, and they need <span style={{ color: "#F1C40F", fontWeight: 700 }}>our help</span>. We at NayePankh Foundation strive to break this cycle and provide a ray of hope to those in need.
              <br />
              <br />
              With your support, we can continue to provide <span style={{ color: "#2ECC71", fontWeight: 700 }}>education</span>, <span style={{ color: "#2ECC71", fontWeight: 700 }}>healthcare</span>, and other basic amenities to these communities. We can empower them to lead better lives and realize their true potential. Every donation, no matter how small, can make a <span style={{ color: "#F1C40F", fontWeight: 700 }}>huge difference</span>. Your support can provide a child with a school uniform, a pair of shoes, or even a nutritious meal. It can provide a family with access to clean water, sanitation, and healthcare facilities. It can change the trajectory of someone's life forever.
              <br />
              <br />
              We understand that times are tough, and everyone is going through their own struggles. But we urge you to think of those who are less fortunate and extend a helping hand. Your generosity can make a world of difference to someone in need. We know that we can count on your support to continue our mission. Your donations will help us reach more communities and make a meaningful impact in the lives of those who need it the most.
              <br />
              <br />
              Let’s come together and make a difference. Thank you for considering our cause and supporting NayePankh Foundation. Your support means the world to us and those we serve. Let’s work together to create a better world for all.
              <br />
              <br />
              With heartfelt gratitude,
              <br />
              <strong>Prashant Shukla</strong>
              <br />
              Founder & President, NayePankh Foundation
            </Typography>

            {/* Donate Now Button */}
            <Box sx={{ textAlign: "center", mb: 6 }}>
              <Typography
                variant="h5"
                sx={{
                  color: "primary.main",
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: "1.25rem", md: "1.75rem" },
                }}
              >
                Donate Now
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "text.primary",
                  mb: 3,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                }}
              >
                Click on the button below to donate to us
              </Typography>
              <Button
                variant="contained"
                href="https://pages.razorpay.com/pl_NUcVhpQzK8rI1b/view"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  bgcolor: "#F1C40F",
                  color: "#34495E",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  borderRadius: 50,
                  py: 1.5,
                  px: 6,
                  fontSize: { xs: "1rem", md: "1.25rem" },
                  boxShadow: "0px 6px 20px rgba(0,0,0,0.25)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: "#F39C12",
                    transform: "scale(1.05)",
                    boxShadow: "0px 8px 25px rgba(0,0,0,0.3)",
                  },
                }}
              >
                Donate
              </Button>
              <Box sx={{ mt: 2 }}>
                <img
                  src={razorpayLogo}
                  alt="Powered by Razorpay"
                  style={{ width: "150px", height: "auto" }}
                />
              </Box>
            </Box>
          </Container>

          {/* Closing Emotional Appeal Section with Image on Right */}
          <Grid container spacing={4} sx={{ py: { xs: 4, md: 6 } }}>
            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  mx: { xs: 2, md: 4 },
                  p: { xs: 3, md: 6 },
                  maxWidth: "800px",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.primary",
                    fontSize: { xs: "1rem", md: "1.25rem" },
                    lineHeight: 2,
                    textAlign: { xs: "center", md: "left" },
                    animation: "fadeInUp 2s ease-in-out",
                  }}
                >
                  Imagine for a moment that you are struggling to make ends
                  meet. You're worried about how you'll pay for basic
                  necessities like food, shelter, and healthcare. Now, imagine
                  that someone steps forward and offers a{" "}
                  <span style={{ color: "#2ECC71", fontWeight: 700 }}>
                    helping hand
                  </span>{" "}
                  - a small donation that can make all the difference in your
                  life. That feeling of relief and gratitude is immeasurable.
                  By donating to a cause you care about, you have the{" "}
                  <span style={{ color: "#F1C40F", fontWeight: 700 }}>
                    power
                  </span>{" "}
                  to make that difference in someone’s life. You can provide
                  hope and support to those who need it most, and create a
                  ripple effect of kindness and generosity in the world. So, if
                  you have the means to give, think about the{" "}
                  <span style={{ color: "#2ECC71", fontWeight: 700 }}>
                    impact
                  </span>{" "}
                  you can make. Your donation may just be the lifeline that
                  someone desperately needs.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box
                component="img"
                src={donationBg}
                alt="Donation Background"
                sx={{
                  width: "70%",
                  height: "100%",
                  borderRadius: { xs: 0, md: 4 },
                  border: "10px solid #FFFFFF",
                  boxShadow: "0px 6px 20px rgba(0,0,0,0.2)",
                }}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Footer */}
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default Donation;