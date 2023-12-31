import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import SellIcon from '@mui/icons-material/Sell';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import DescriptionIcon from '@mui/icons-material/Description';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import AnalyticsIcon from '@mui/icons-material/Analytics';

export const candidateItems = [
  {
    'icon': SellOutlinedIcon,
    'filledIcon': SellIcon,
    'label': 'Job Listings',
    'ref': 'jobs',
    'slug': '/'
  },
  {
    'icon': DescriptionOutlinedIcon,
    'filledIcon': DescriptionIcon,
    'label': 'My Applications',
    'ref': 'my-applications',
    'slug': '/'
  },
]
export const clientItems = [
  {
    'icon': SellOutlinedIcon,
    'filledIcon': SellIcon,
    'label': 'My Listings',
    'ref': 'listings',
    'slug': '/listings'
  },
  {
    'icon': DescriptionOutlinedIcon,
    'filledIcon': DescriptionIcon,
    'label': 'Applications',
    'ref': 'applications',
    'slug': '/applications'
  },
  {
    'icon': AnalyticsOutlinedIcon,
    'filledIcon': AnalyticsIcon,
    'label': 'Analytics',
    'ref': 'analytics',
    'slug': '/analytics'
  },
]