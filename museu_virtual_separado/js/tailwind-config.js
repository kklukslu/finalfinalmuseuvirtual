tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
                    },
                    colors: {
                        brand: {
                            50: '#f0f3ff',
                            100: '#e0e7ff',
                            500: '#6366f1',
                            600: '#4f46e5',
                            700: '#4338ca',
                            900: '#1e1b4b',
                        },
                        soft: {
                            bg: '#e2e8f0', // Soft Slate-200
                            card: '#ffffff',
                            muted: '#64748b',
                            heading: '#0f172a',
                            border: '#cbd5e1'
                        }
                    },
                    boxShadow: {
                        'soft-sm': '0 2px 8px -2px rgba(15, 23, 42, 0.05)',
                        'soft-md': '0 12px 28px -6px rgba(15, 23, 42, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.03)',
                        'soft-lg': '0 25px 50px -12px rgba(15, 23, 42, 0.12)',
                    }
                }
            }
        }
