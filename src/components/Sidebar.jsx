import React from 'react'
import { Box, Avatar, Typography, List, ListItem, ListItemText, ListItemIcon, Paper, Divider } from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import gradPic from '../assets/images/gradpic.jpg'

export default function Sidebar() {
  const skills = ['Python', 'Node JS', 'JavaScript', 'React', 'Vite']
  const interests = ['Database', 'Studying Languages', 'Data Privacy']

  return (
    <Paper
      elevation={8}
      sx={{
        p: { xs: 2, md: 3 },
        bgcolor: 'transparent',
        borderRadius: 3,
        background: 'linear-gradient(180deg,#0f4c75 0%, #08263b 100%)',
        color: '#fff'
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Avatar
            src={gradPic}
            alt="avatar"
            sx={{ width: 96, height: 96, mb: 1.5, border: '3px solid rgba(255,255,255,0.12)' }}
          />
        </Box>

        <Box sx={{ width: '100%', mt: 1, textAlign: 'left' }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 800, color: '#fff' }}>
            Oskar Jene T. Carcasona
          </Typography>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.85)', display: 'block', mb: 1 }}>
            BSIT Student · Major: Programming
          </Typography>

          <Divider sx={{ width: '100%', my: 1.2, borderColor: 'rgba(255,255,255,0.12)' }} />

          <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'rgba(255,255,255,0.95)', mb: 0.5 }}>
            About
          </Typography>
          <Typography variant="body2" sx={{ mb: 1, color: 'rgba(255,255,255,0.9)' }}>
            Dedicated to securing data and maintaining privacy. Passionate about teaching and sharing knowledge.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 700, mt: 0.7, color: 'rgba(255,255,255,0.95)' }}>
            Skills
          </Typography>
          <List dense sx={{ color: 'rgba(255,255,255,0.95)', mt: 0.3, pl: 0 }}>
            {skills.map((s) => (
              <ListItem key={s} sx={{ py: 0.3 }}>
                <ListItemIcon sx={{ minWidth: 28 }}>
                  <FiberManualRecordIcon sx={{ fontSize: 10, color: 'rgba(255,255,255,0.9)' }} />
                </ListItemIcon>
                <ListItemText primary={s} primaryTypographyProps={{ variant: 'body2', sx: { color: 'rgba(255,255,255,0.95)', fontWeight: 600 } }} />
              </ListItem>
            ))}
          </List>

          <Typography variant="subtitle2" sx={{ fontWeight: 700, mt: 0.5, color: 'rgba(255,255,255,0.95)' }}>
            Interests
          </Typography>
          <List dense sx={{ color: 'rgba(255,255,255,0.95)', mt: 0.3, pl: 0 }}>
            {interests.map((i) => (
              <ListItem key={i} sx={{ py: 0.3 }}>
                <ListItemIcon sx={{ minWidth: 28 }}>
                  <FiberManualRecordIcon sx={{ fontSize: 10, color: 'rgba(255,255,255,0.8)' }} />
                </ListItemIcon>
                <ListItemText primary={i} primaryTypographyProps={{ variant: 'body2', sx: { color: 'rgba(255,255,255,0.92)', fontWeight: 600 } }} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Paper>
  )
}
