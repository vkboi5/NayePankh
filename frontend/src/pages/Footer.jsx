import { Box, IconButton, Typography, Grid } from "@mui/material";
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  YouTube as YouTubeIcon,
  Instagram as InstagramIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import mainLogo from "../assets/main-logo.png"; // Logo image
import trustImage from "../assets/footer-img.avif"; // Team image

function Footer() {
  return (
    <Box
      id="contact"
      component="footer"
      sx={{
        position: "relative",
        zIndex: 1,
        bgcolor: "#FFFFFF", // Default white for first half
        color: "#34495E",
        overflow: "hidden",
        boxShadow: "0px -4px 20px rgba(0, 0, 0, 0.1)",
        width: "100%",
        m: 0, // No margins
        p: 0, // No padding
      }}
    >
      <Grid container spacing={0} sx={{ m: 0, width: "100%" }}>
        {/* Left Half: White Background with Logo and Links */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            bgcolor: "#FFFFFF",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            m: 0,
            p: 0, // No padding around the grid item
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              maxWidth: { xs: "300px", md: "400px" },
              px: { xs: 2, md: 3 }, // Internal padding for content
              py: { xs: 3, md: 4 }, // Internal padding for content
            }}
          >
            <img
              src={mainLogo}
              alt="NayePankh Foundation Logo"
              style={{
                height: { xs: "30px", md: "45px" },
                marginBottom: { xs: "12px", md: "20px" },
                maxWidth: "50%",
              }}
            />
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: "#2ECC71",
                mb: 2,
                fontSize: { xs: "1.5rem", md: "2rem" },
              }}
            >
              NayePankh Foundation
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: { xs: 2, md: 3 },
                mb: { xs: 2, md: 3 },
              }}
            >
              <Link to="/about" style={{ textDecoration: "none" }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#34495E",
                    fontWeight: 600,
                    "&:hover": { color: "#2ECC71" },
                    transition: "color 0.3s ease",
                    fontSize: { xs: "0.9rem", md: "1rem" },
                  }}
                >
                  About
                </Typography>
              </Link>
              <Link to="/certificates" style={{ textDecoration: "none" }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#34495E",
                    fontWeight: 600,
                    "&:hover": { color: "#2ECC71" },
                    transition: "color 0.3s ease",
                    fontSize: { xs: "0.9rem", md: "1rem" },
                  }}
                >
                  Certificates
                </Typography>
              </Link>
              <Link to="/newspaper" style={{ textDecoration: "none" }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#34495E",
                    fontWeight: 600,
                    "&:hover": { color: "#2ECC71" },
                    transition: "color 0.3s ease",
                    fontSize: { xs: "0.9rem", md: "1rem" },
                  }}
                >
                  Newspaper
                </Typography>
              </Link>
              <Link to="/donate" style={{ textDecoration: "none" }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#34495E",
                    fontWeight: 600,
                    "&:hover": { color: "#2ECC71" },
                    transition: "color 0.3s ease",
                    fontSize: { xs: "0.9rem", md: "1rem" },
                  }}
                >
                  Donate
                </Typography>
              </Link>
            </Box>
          </Box>
        </Grid>

        {/* Right Half: Gradient Background with Team Image and Contact */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            bgcolor: "#34495E",
            background: `
              linear-gradient(135deg, rgba(46, 204, 113, 0.2) 0%, rgba(241, 196, 15, 0.2) 100%),
              #34495E
            `,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            m: 0,
            p: 0, // No padding around the grid item
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              maxWidth: { xs: "300px", md: "400px" },
              px: { xs: 2, md: 3 }, // Internal padding for content
              py: { xs: 3, md: 4 }, // Internal padding for content
            }}
          >
            <Box
              sx={{
                border: "3px solid #FFFFFF",
                borderRadius: "8px",
                overflow: "hidden",
                mb: { xs: 2, md: 3 },
              }}
            >
              <img
                src={trustImage}
                alt="NayePankh Team"
                style={{
                  height: { xs: "150px", md: "200px" },
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Typography
              variant="body1"
              sx={{
                color: "#FFFFFF",
                fontWeight: 500,
                mb: 1,
                fontSize: { xs: "0.9rem", md: "1rem" },
              }}
            >
              Contact us at:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#F1C40F",
                fontWeight: 600,
                mb: 1,
                fontSize: { xs: "0.9rem", md: "1rem" },
              }}
            >
              president@nayepankh.com
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#F1C40F",
                fontWeight: 600,
                mb: { xs: 2, md: 3 },
                fontSize: { xs: "0.9rem", md: "1rem" },
              }}
            >
              +91-8318500748
            </Typography>
            <Box sx={{ display: "flex", gap: { xs: 1.5, md: 2 } }}>
              <IconButton
                aria-label="Facebook"
                href="https://www.facebook.com/nayepankhfoundation"
                target="_blank" // Add this line
                rel="noopener noreferrer" // Recommended for security
                sx={{
                  color: "#2ECC71",
                  "&:hover": { color: "#27AE60" },
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "50%",
                  p: 1,
                  fontSize: { xs: "1.5rem", md: "1.75rem" },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                aria-label="Twitter"
                href="https://x.com/nayepankh"
                target="_blank" // Add this line
                rel="noopener noreferrer" // Recommended for security
                sx={{
                  color: "#2ECC71",
                  "&:hover": { color: "#27AE60" },
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "50%",
                  p: 1,
                  fontSize: { xs: "1.5rem", md: "1.75rem" },
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                aria-label="YouTube"
                href="https://www.youtube.com/@nayepankhfoundation"
                target="_blank" // Add this line
                rel="noopener noreferrer" // Recommended for security
                sx={{
                  color: "#2ECC71",
                  "&:hover": { color: "#27AE60" },
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "50%",
                  p: 1,
                  fontSize: { xs: "1.5rem", md: "1.75rem" },
                }}
              >
                <YouTubeIcon />
              </IconButton>
              <IconButton
                aria-label="Instagram"
                href="https://www.instagram.com/nayepankhfoundation"
                target="_blank" // Add this line
                rel="noopener noreferrer" // Recommended for security
                sx={{
                  color: "#2ECC71",
                  "&:hover": { color: "#27AE60" },
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "50%",
                  p: 1,
                  fontSize: { xs: "1.5rem", md: "1.75rem" },
                }}
              >
                <InstagramIcon />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Tagline */}
      <Box
        sx={{
          bgcolor: "#34495E",
          py: 1.5,
          textAlign: "center",
          width: "100%",
          m: 0,
          p: 0, // No padding around the tagline box
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "#F1C40F",
            fontWeight: 500,
            fontSize: { xs: "0.85rem", md: "1rem" },
            py: 1.5, // Internal padding for tagline text
          }}
        >
          NayePankh Foundation – Empowering Change, One Wing at a Time
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;