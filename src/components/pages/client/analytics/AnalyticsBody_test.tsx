import * as React from 'react';
import { Avatar, Button, Card, Divider, FormControl, Grid, IconButton, Link, List, ListItem, ListItemButton, MenuItem, Select, SelectChangeEvent, Stack, Theme, Typography, alpha } from '@mui/material';
import Box from '@mui/material/Box';
import ExpandIcon from '@mui/icons-material/ExpandMoreRounded';
import { content } from './_content'
import taco from '../../../[global]/assets/tacobell.webp'
import { EmailRounded, MoreHoriz } from '@mui/icons-material';
import pfp from '../../../[global]/assets/pfp.png'
import pfp2 from '../../../[global]/assets/pfp2.png'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';

interface AnalyticsBodyProps {
  theme: Theme;
}
const AnalyticsBody: React.FC<AnalyticsBodyProps> = ({ theme }) => {
  // dropdown
  const [analytics, setAnalytics] = React.useState('Past 7 Days')
  const handleAnalyticsChange = (event: SelectChangeEvent) => setAnalytics(event.target.value)
  const [demo, setDemo] = React.useState('This month')
  const handleDemoChange = (event: SelectChangeEvent) => setDemo(event.target.value)
  return (
    <Box component='main' sx={{ flexGrow: 1, border: `1px solid ${theme.palette.divider}`, backgroundColor: theme.palette.background.paper, borderTopLeftRadius: 7, marginTop: '64px', overflowY: 'auto' }}>
      
      <Stack direction='row' component='div' sx={{ p: 3, pt: 2.5, }}>
        {/* title */}
        <Stack direction='column' component='div' gap={0.75} sx={{ flexGrow: 0 }}>
          <Typography variant='h2' sx={{ fontSize: '1.75rem', fontWeight: 700, color: theme.palette.text.primary }}>Analytics Dashboard</Typography>
          <Typography variant='h3' sx={{ fontSize: '1rem', fontWeight: 300, color: theme.palette.text.secondary, }}>Monitor key metrics, check reporting, and review insights.</Typography>
        </Stack>
        {/* right side panel */}
        <Stack direction='column' component='div' gap={3} sx={{ width: '20rem', ml: 'auto' }}>
            {/* team */}
            <Card component='div' elevation={1} sx={{ backgroundColor: theme.palette.background.default, borderRadius: 2.5, flexShrink: 0 }}>
              <List disablePadding sx={{ display: 'flex', p: 2.5, justifyContent: 'space-between', alignItems: 'center', }}>
                <ListItem disableGutters disablePadding sx={{ justifyContent: 'center' }}>
                  <Button variant='text' sx={{ color: theme.palette.text.disabled, py: 0.25, flexGrow: 1 }}>
                    Profile
                  </Button>
                </ListItem>
                <ListItem disableGutters disablePadding sx={{ justifyContent: 'center' }}>
                  <Button variant='text' sx={{ color: theme.palette.text.disabled, py: 0.25, flexGrow: 1 }}>
                    History
                  </Button>
                </ListItem>
                <ListItem disableGutters disablePadding sx={{ justifyContent: 'center' }}>
                  <Box component='div' sx={{ position: 'absolute', width: '100%', height: '3px', backgroundColor: theme.palette.secondary.main, top: -20, borderRadius: 5 }} />
                  <Button variant='text' color='secondary' sx={{ py: 0.25, flexGrow: 1 }}>
                    Team
                  </Button>
                </ListItem>
              </List>
              <Stack direction='row' component='div' gap={2} sx={{ backgroundColor: theme.palette.action.hover, width: '100%', justifyContent: 'center', alignItems: 'center', p: 2.5 }}>
                <div className='bg-gradient-to-br from-frost-300/60 to-purple/60 w-[7.5rem] h-[7.5rem] rounded-full grid place-items-center'>
                  <Box component='img' alt='profile picture' src={taco} width='7rem' height='7rem' sx={{ borderRadius: '50%', zIndex: 9999, }} />
                </div>
                <Stack direction='column' component='div' gap={0.25}>
                  <Typography variant='h4' sx={{ fontSize: '1.125rem', color: theme.palette.secondary.main, fontWeight: 700, }}>Taco Bell</Typography>
                  <Typography variant='h5' sx={{ fontSize: '0.8rem', color: alpha(theme.palette.text.secondary, 0.7), mb: 1 }}>LEAP partner since 2017</Typography>
                  <Button variant='outlined' color='secondary' sx={{ minWidth: 0, }}>view team</Button>
                </Stack>
              </Stack>
            </Card>
            {/* projects */}
            <Card component='div' elevation={2} sx={{ backgroundColor: theme.palette.background.default, borderRadius: 2.5, p: 2.5, flexShrink: 0 }}>
              <Stack direction='row' component='div' sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant='h6' sx={{ fontSize: '0.875rem', fontWeight: 700, }}>Current Projects</Typography>
                <IconButton size='small' aria-label='project details'>
                  <MoreHoriz sx={{ color: alpha(theme.palette.text.disabled, 0.5) }} />
                </IconButton>
              </Stack>
              <List sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <ListItem disablePadding disableGutters sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Box component='div' sx={{ p: 1.5, fontWeight: 800, lineHeight: 1, aspectRatio: 1, color: theme.palette.secondary.main, backgroundColor: alpha(theme.palette.secondary.light, 0.2), borderRadius: 2.5, }}>P1</Box>
                  <Stack direction='column' component='div'>
                    <Typography variant='h6' sx={{ fontSize: '0.8rem', fontWeight: 500, }}>Project HG</Typography>
                    <Typography variant='h5' sx={{ fontSize: '0.65rem', fontWeight: 500, color: alpha(theme.palette.text.secondary, 0.7) }}>64/100 Recruited</Typography>
                  </Stack>
                  <Box component='div' sx={{ position: 'relative', ml: 'auto', width: '7.5rem', height: '3px', borderRadius: 5, backgroundColor: theme.palette.primary.main }}>
                    <Box component='div' sx={{ position: 'absolute', width: '64%', height: '3px', borderRadius: 5, backgroundColor: theme.palette.secondary.main }} />
                  </Box>
                </ListItem>
                <ListItem disablePadding disableGutters sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Box component='div' sx={{ p: 1.5, fontWeight: 800, lineHeight: 1, aspectRatio: 1, color: theme.palette.secondary.main, backgroundColor: alpha(theme.palette.secondary.light, 0.2), borderRadius: 2.5, }}>P2</Box>
                  <Stack direction='column' component='div'>
                    <Typography variant='h6' sx={{ fontSize: '0.8rem', fontWeight: 500, }}>Project DH</Typography>
                    <Typography variant='h5' sx={{ fontSize: '0.65rem', fontWeight: 500, color: alpha(theme.palette.text.secondary, 0.7) }}>23/100 Recruited</Typography>
                  </Stack>
                  <Box component='div' sx={{ position: 'relative', ml: 'auto', width: '7.5rem', height: '3px', borderRadius: 5, backgroundColor: theme.palette.primary.main }}>
                    <Box component='div' sx={{ position: 'absolute', width: '20.3%', height: '3px', borderRadius: 5, backgroundColor: theme.palette.secondary.main }} />
                  </Box>
                </ListItem>
                <ListItem disablePadding disableGutters sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Box component='div' sx={{ p: 1.5, fontWeight: 800, lineHeight: 1, aspectRatio: 1, color: theme.palette.secondary.main, backgroundColor: alpha(theme.palette.secondary.light, 0.2), borderRadius: 2.5, }}>P3</Box>
                  <Stack direction='column' component='div'>
                    <Typography variant='h6' sx={{ fontSize: '0.8rem', fontWeight: 500, }}>Project DH</Typography>
                    <Typography variant='h5' sx={{ fontSize: '0.65rem', fontWeight: 500, color: alpha(theme.palette.text.secondary, 0.7) }}>420/69 Recruited</Typography>
                  </Stack>
                  <Box component='div' sx={{ position: 'relative', ml: 'auto', width: '7.5rem', height: '3px', borderRadius: 5, backgroundColor: theme.palette.primary.main }}>
                    <Box component='div' sx={{ position: 'absolute', width: '100%', height: '3px', borderRadius: 5, backgroundColor: theme.palette.secondary.main }} />
                  </Box>
                </ListItem>
              </List>
              <Divider sx={{ my: 2.5 }} />
              <Stack direction='row' component='div' sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant='h6' sx={{ fontSize: '0.875rem', fontWeight: 700, }}>Last Clients</Typography>
                <IconButton size='small' aria-label='project details'>
                  <MoreHoriz sx={{ color: alpha(theme.palette.text.disabled, 0.5) }} />
                </IconButton>
              </Stack>
              <List sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <ListItem disablePadding disableGutters sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Avatar src={pfp} />
                  <Stack direction='column' component='div'>
                    <Typography variant='h6' sx={{ fontSize: '0.8rem', fontWeight: 500, }}>Jerry Malkova</Typography>
                    <Typography variant='h5' sx={{ fontSize: '0.65rem', fontWeight: 500, color: alpha(theme.palette.text.secondary, 0.7) }}>jerrymalkova@ph.com</Typography>
                  </Stack>
                  <IconButton sx={{ ml: 'auto' }}>
                    <EmailRounded sx={{ fontSize: '1.125rem' }} />
                  </IconButton>
                </ListItem>
                <ListItem disablePadding disableGutters sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Avatar src={pfp2} />
                  <Stack direction='column' component='div'>
                    <Typography variant='h6' sx={{ fontSize: '0.8rem', fontWeight: 500, }}>God</Typography>
                    <Typography variant='h5' sx={{ fontSize: '0.65rem', fontWeight: 500, color: alpha(theme.palette.text.secondary, 0.7) }}>xxthesaviorxx@gmail.com</Typography>
                  </Stack>
                  <IconButton sx={{ ml: 'auto' }}>
                    <EmailRounded sx={{ fontSize: '1.125rem' }} />
                  </IconButton>
                </ListItem>
              </List>
            </Card>
            <Button fullWidth color='secondary' variant='outlined' size='large' startIcon sx={{ maxWidth: '20rem' }}>
              <FileDownloadOutlinedIcon />
              Export
            </Button>
        </Stack>
      </Stack>

      <Stack direction='row' component='section' sx={{ p: 3, pt: 0, height: 'calc(100% - 6.375rem)' }}> {/* 100% minus title height + padding */}
        {/* left side */}
        <Stack direction='column' component='div' gap={3} sx={{ width: 'fit-content', mr: 'auto', }}>
          {/* insights */}
          {/* <Typography variant='h2' sx={{ fontSize: '1.25rem', fontWeight: 700, color: theme.palette.text.primary, my: 2 }}>Insights</Typography> */}
          <Card elevation={2} sx={{ backgroundColor: theme.palette.background.default, borderRadius: 2.5, p: 2.5, width: 'fit-content', flexShrink: 0 }}>
            <Stack direction='row' component='div' sx={{ justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography sx={{ fontSize: '0.95rem', fontWeight: 500, textTransform: 'uppercase', color: theme.palette.text.secondary }}><QueryStatsOutlinedIcon sx={{ fontSize: '1.25rem' }} /> Applicant demographics</Typography>
              <FormControl variant='standard'>
                <Select
                  id="timeframe"
                  value={demo}
                  onChange={handleDemoChange}
                  variant='standard' disableUnderline
                  IconComponent={ExpandIcon}
                  sx={{ backgroundColor: theme.palette.primary.light, color: theme.palette.info.light, borderRadius: 2.5, pl: 0.75, py: 0.25, fontSize: '0.875rem', '& .MuiSelect-select': { '&:focus': { backgroundColor: 'rgba(0,0,0,0)' } }, '& .MuiInput-input': { padding: 0 }, '& .MuiSvgIcon-root': { color: theme.palette.info.light } }}
                >
                  <MenuItem value={'Past 7 Days'}>Past 7 Days</MenuItem>
                  <MenuItem value={'This month'}>This month</MenuItem>
                  <MenuItem value={'This year'}>This year</MenuItem>
                  <MenuItem value={'All time'}>All time</MenuItem>
                </Select>
              </FormControl>
            </Stack>
            <Stack direction='row' component='div' gap={3}>
              <Box component='div' sx={{ minWidth: '8rem', minHeight: '8rem', borderRadius: 2.5, border: `1px solid ${theme.palette.divider}`, backgroundColor: theme.palette.action.hover }} />
              <Grid container spacing={2}>
                <Grid item lg={6}>
                  <Stack direction='column' component='div'>
                    <Box component='div' sx={{ width: '3ch', backgroundColor: theme.palette.purple.main, height: 4, borderRadius: 5 }} />
                    <Typography variant='h4' sx={{ fontSize: '1rem', fontWeight: 600, cursor: 'default', color: theme.palette.text.primary, mt: 0.5, }} >62%</Typography>
                    <Typography variant='caption' sx={{ color: theme.palette.text.disabled, cursor: 'default', }}>College educated</Typography>
                  </Stack>
                </Grid>
                <Grid item lg={6}>
                  <Stack direction='column' component='div'>
                    <Box component='div' sx={{ width: '3ch', backgroundColor: theme.palette.pink.main, height: 4, borderRadius: 5 }} />
                    <Typography variant='h4' sx={{ fontSize: '1rem', fontWeight: 600, cursor: 'default', color: theme.palette.text.primary, mt: 0.5, }} >23%</Typography>
                    <Typography variant='caption' sx={{ color: theme.palette.text.disabled, cursor: 'default', }}>Title</Typography>
                  </Stack>
                </Grid>
                <Grid item lg={6}>
                  <Stack direction='column' component='div'>
                    <Box component='div' sx={{ width: '3ch', backgroundColor: theme.palette.green.main, height: 4, borderRadius: 5 }} />
                    <Typography variant='h4' sx={{ fontSize: '1rem', fontWeight: 600, cursor: 'default', color: theme.palette.text.primary, mt: 0.5, }} >6%</Typography>
                    <Typography variant='caption' sx={{ color: theme.palette.text.disabled, cursor: 'default', }}>Title</Typography>
                  </Stack>
                </Grid>
                <Grid item lg={6}>
                  <Stack direction='column' component='div'>
                    <Box component='div' sx={{ width: '3ch', backgroundColor: theme.palette.secondary.main, height: 4, borderRadius: 5 }} />
                    <Typography variant='h4' sx={{ fontSize: '1rem', fontWeight: 600, cursor: 'default', color: theme.palette.text.primary, mt: 0.5, }} >9%</Typography>
                    <Typography variant='caption' sx={{ color: theme.palette.text.disabled, cursor: 'default', }}>Title</Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
          </Card>
          {/* analytics */}

          <FormControl variant='standard'>
            <Select
              id="timeframe"
              value={analytics}
              onChange={handleAnalyticsChange}
              variant='standard' disableUnderline
              IconComponent={ExpandIcon}
              sx={{ backgroundColor: theme.palette.primary.light, color: theme.palette.info.light, borderRadius: 2.5, pl: 0.75, py: 0.25, fontSize: '0.875rem', '& .MuiSelect-select': { '&:focus': { backgroundColor: 'rgba(0,0,0,0)' } }, '& .MuiInput-input': { padding: 0 }, '& .MuiSvgIcon-root': { color: theme.palette.info.light }, width: 'fit-content', boxShadow: theme.shadows[1] }}
            >
              <MenuItem value={'Past 7 Days'}>Past 7 Days</MenuItem>
              <MenuItem value={'This month'}>This month</MenuItem>
              <MenuItem value={'This year'}>This year</MenuItem>
              <MenuItem value={'All time'}>All time</MenuItem>
            </Select>
          </FormControl>
          <Grid container gap={2} sx={{ mt: -2 }}> {/* offset space created by gap={3} */}
            {content.map(({ IconComponent, number, title, caption, color }) => (
              <Grid item key={title}>
                <Card elevation={1} sx={{ backgroundColor: theme.palette.background.default, borderRadius: 2.5, p: 2, maxWidth: '10rem', }}>
                  <Stack direction='column' component='div' gap={0.75} sx={{ alignItems: 'center' }}>
                    <Box sx={{ p: 1, backgroundColor: alpha(color, 0.1), borderRadius: '50%' }}>
                      <IconComponent sx={{ color: color }} />
                    </Box>
                    <Typography sx={{ fontSize: '2.25rem', fontWeight: 800, color: color }}>{number}</Typography>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 500, textTransform: 'uppercase', color: theme.palette.text.secondary }}>{title}</Typography>
                    <Typography sx={{ fontSize: '0.75rem', fontWeight: 300, color: alpha(theme.palette.text.secondary, 0.7), textAlign: 'center' }}>{caption}</Typography>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
          {/* <Link href='#' variant='body2' sx={{ mt: -2.5, ml: 'auto', color: theme.palette.info.light, }}>See more</Link> */}
        </Stack>
      </Stack>

      
    </Box>
  )
}

export default AnalyticsBody