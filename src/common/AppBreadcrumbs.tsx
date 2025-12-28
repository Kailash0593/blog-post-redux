import { Breadcrumbs, Link, Typography } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

export default function AppBreadcrumbs() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(Boolean);

    console.log("pathnames", pathnames)

    return (
        <Breadcrumbs aria-label="breadcrumb" className='px-3! py-2! fixed top-16 w-full bg-white z-1'>
            <Link
                component={RouterLink}
                underline="hover"
                color="inherit"
                to="/"
            >
                Home
            </Link>
            
            {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;

                return isLast ? (
                    <Typography color="text.primary" key={to}>
                        {value}
                    </Typography>
                ) : (
                    isNaN(value as any) &&
                    <Link
                        key={to}
                        component={RouterLink}
                        underline="hover"
                        color="inherit"
                        to={to}
                    >
                        {value}
                    </Link>
                );
            })}
        </Breadcrumbs>
    );
}
