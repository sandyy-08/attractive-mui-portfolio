import React from 'react';
import { Box, Button, Typography } from '@mui/material';

export default function Hero() {
  return (
    <Box sx={{ position:'relative', overflow:'hidden', mb:4 }}>
      <div className="hero-bg" aria-hidden />
      <Box sx={{
        display:'flex', alignItems:'center', gap:3, justifyContent:'space-between',
        flexWrap:'wrap'
      }}>
        <Box sx={{ maxWidth:680 }}>
          <Typography variant="h2" sx={{ fontWeight:800
