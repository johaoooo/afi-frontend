// Icônes professionnelles personnalisées
import {
  FiHome,
  FiShoppingBag,
  FiBookOpen,
  FiCalendar,
  FiMail,
  FiUser,
  FiLogIn,
  FiLogOut,
  FiMenu,
  FiX,
  FiChevronDown,
  FiChevronRight,
  FiChevronLeft,
  FiHeart,
  FiShare2,
  FiStar,
  FiTruck,
  FiShield,
  FiClock,
  FiAward,
  FiTrendingUp,
  FiUsers,
  FiGrid,
  FiList,
  FiSearch,
  FiFilter,
  FiPlus,
  FiMinus,
  FiTrash2,
  FiEdit2,
  FiSettings,
  FiBell,
  FiArrowLeft,
  FiArrowRight,
  FiCheck,
  FiAlertCircle,
  FiInfo,
  FiCamera,
  FiImage,
  FiUpload,
  FiDownload,
  FiRefreshCw,
  FiLock,
  FiUnlock,
  FiEye,
  FiEyeOff,
} from 'react-icons/fi';

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
  FaTelegram,
  FaTiktok,
  FaPinterest,
} from 'react-icons/fa';

import {
  MdPayment,
  MdLocalShipping,
  MdSecurity,
  MdVerified,
  MdOutlineDesignServices,
  MdOutlineHandyman,
} from 'react-icons/md';

// Icônes Wave, MTN, Orange (utilisation d'emojis/texte faute de mieux)
const WaveIcon = () => <span className="font-bold text-sm">WAVE</span>;
const MTNIcon = () => <span className="font-bold text-sm">MTN</span>;
const OrangeIcon = () => <span className="font-bold text-sm">ORANGE</span>;

// Export organisé par catégorie
export const NavigationIcons = {
  Home: FiHome,
  Shop: FiShoppingBag,
  Training: FiBookOpen,
  Events: FiCalendar,
  Contact: FiMail,
  User: FiUser,
  Login: FiLogIn,
  Logout: FiLogOut,
  Menu: FiMenu,
  Close: FiX,
  ChevronDown: FiChevronDown,
  ChevronRight: FiChevronRight,
  ChevronLeft: FiChevronLeft,
  Search: FiSearch,
};

export const ActionIcons = {
  Heart: FiHeart,
  Share: FiShare2,
  Star: FiStar,
  Edit: FiEdit2,
  Delete: FiTrash2,
  Settings: FiSettings,
  Plus: FiPlus,
  Minus: FiMinus,
  Filter: FiFilter,
  Grid: FiGrid,
  List: FiList,
  ArrowLeft: FiArrowLeft,
  ArrowRight: FiArrowRight,
  Check: FiCheck,
  Alert: FiAlertCircle,
  Info: FiInfo,
  Camera: FiCamera,
  Image: FiImage,
  Upload: FiUpload,
  Download: FiDownload,
  Refresh: FiRefreshCw,
  Lock: FiLock,
  Unlock: FiUnlock,
  Eye: FiEye,
  EyeOff: FiEyeOff,
};

export const SocialIcons = {
  Facebook: FaFacebook,
  Instagram: FaInstagram,
  Twitter: FaTwitter,
  LinkedIn: FaLinkedin,
  YouTube: FaYoutube,
  WhatsApp: FaWhatsapp,
  Telegram: FaTelegram,
  TikTok: FaTiktok,
  Pinterest: FaPinterest,
};

export const PaymentIcons = {
  Wave: WaveIcon,
  MTN: MTNIcon,
  Orange: OrangeIcon,
  Card: MdPayment,
};

export const ServiceIcons = {
  Delivery: FiTruck,
  Security: FiShield,
  Clock: FiClock,
  Award: FiAward,
  Trending: FiTrendingUp,
  Users: FiUsers,
  Design: MdOutlineDesignServices,
  Craft: MdOutlineHandyman,
  Verified: MdVerified,
  Shipping: MdLocalShipping,
};

export default {
  Navigation: NavigationIcons,
  Actions: ActionIcons,
  Social: SocialIcons,
  Payments: PaymentIcons,
  Services: ServiceIcons,
};
