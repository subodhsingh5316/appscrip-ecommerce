// components/FilterSidebar.tsx
'use client';

import { Accordion, AccordionSummary, AccordionDetails, Checkbox, FormControlLabel, Typography, Stack, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

export default function FilterSidebar() {
  const [customizable, setCustomizable] = useState(false);
  const [selected, setSelected] = useState([]);

  const options = ['Men', 'Women', 'Baby & Kids'];

  const handleChange = (option) => {
    if (selected.includes(option)) {
      setSelected(selected.filter(item => item !== option));
    } else {
      setSelected([...selected, option]);
    }
  };
  const handleUnselectAll = () => {
    setSelected([]);
  };

  const allSelected = selected.length === options.length;

  const filterSections = [
    { label: 'IDEAL FOR' },
    { label: 'OCCASION' },
    { label: 'WORK' },
    { label: 'FABRIC' },
    { label: 'SEGMENT' },
    { label: 'SUITABLE FOR' },
    { label: 'RAW MATERIALS' },
    { label: 'PATTERN' },
  ];

  return (
    <Box sx={{ width: 300, p: 2, borderRight: '1px solid #eee' }}>
      <FormControlLabel
        control={<Checkbox checked={customizable} onChange={() => setCustomizable(!customizable)} />}
        label="CUSTOMIZABLE"
        sx={{ mb: 2 }}
      />

      {filterSections.map((section) => (
        <Accordion key={section.label} disableGutters elevation={0} sx={{ mb: 1, borderBottom: '1px solid #eee' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ p: 0 }}>
            <Typography fontWeight="bold" fontSize={14}>{section.label}</Typography>
          </AccordionSummary>
          <AccordionDetails>
        <Typography fontSize={13} color="text.secondary" onClick={handleUnselectAll} sx={{ cursor: 'pointer', mb: 1 }}>
          {allSelected ? 'Unselect all' : 'All'}
        </Typography>

        {options.map(option => (
          <Stack key={option} direction="row" spacing={2} alignItems="center" mb={1}>
            <Checkbox
              size="small"
              checked={selected.includes(option)}
              onChange={() => handleChange(option)}
            />
            <Typography fontSize={14}>{option}</Typography>
          </Stack>
        ))}
      </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
