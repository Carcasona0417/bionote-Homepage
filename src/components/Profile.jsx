import React from 'react'
import { Box, Typography, Divider, Paper, List, ListItem, ListItemText } from '@mui/material'

export default function Profile() {
  const projects = [
    'Personal Website (Solo)',
    'Interactive Flower design (HTML + CSS) (Solo)',
    'Valentine Greeting Card (HTML + CSS) (Solo)',
    'Pet Clinic Management System (ASP.NET) (By Pair)',
    'Library Management System (Python) (By Group)',
    'Poinky Farm management System (HTML + NODE JS) (By Group)'
  ]

  return (
    <Paper elevation={1} sx={{ p: { xs: 2, md: 3 }, bgcolor: 'background.paper', borderRadius: 2 }}>
      <Box sx={{ textAlign: 'left', mb: 1 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 800, letterSpacing: '-0.5px' }}>
          Professional Profile
        </Typography>
        <Typography variant="subtitle2" sx={{ color: 'text.secondary', mt: 0.5 }}>
          Full-Stack Developer
        </Typography>
      </Box>

      <Divider sx={{ my: 2, borderColor: 'rgba(16,24,32,0.06)' }} />

      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>Experience</Typography>
        <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>Back-end Developer - 2024-2025 </Typography>
        <Typography variant="body2" sx={{ mt: 0.7 }}>
            Creating a secure and efficient back-end system for managing user data and application logic.
        </Typography>
      </Box>

      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>Education</Typography>
        <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>Bachelor of Science in Information Technology (BSIT)</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>Currently Studying • Future Developer </Typography>
      </Box>

      <Box>
        <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>Featured Projects</Typography>
        <List sx={{ pl: 1 }}>
          {projects.map((p) => (
            <ListItem key={p} sx={{ py: 0.2 }}>
              <ListItemText primary={`• ${p}`} primaryTypographyProps={{ variant: 'body2' }} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Paper>
  )
}
