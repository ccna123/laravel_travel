import { createInertiaApp } from '@inertiajs/react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './Shared/Layout'

createInertiaApp({
    resolve: (name: string) => {
        const pages = import.meta.glob('./Pages/**/*.tsx', { eager: true });
        let page = pages[`./Pages/${name}.tsx`];

        if (!page) {
            throw new Error('No page found');
        }

        page.default.layout =
            page.default.layout || ((page: any) => <Layout children={page} />);
        return page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});