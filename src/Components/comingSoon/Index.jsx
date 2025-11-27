import { Box, Button, colors, CssBaseline, keyframes, Typography } from '@mui/material'
import React from 'react'
import logo from '../../assets/logo2.png'
import { Vanta } from "vanta-react"
export default function ComingSoon() {

    const glow = keyframes
        ` 
 0%, 100% {
    box-shadow: 0 0 10px rgba(0, 200, 255, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(0, 200, 255, 0.6);
  }
`;




    return (

        <>
            <CssBaseline />
            <Box sx={{
                width: "100%", height: "100vh", display: 'flex', justifyContent: 'center', alignItems: "center"
            }}>
                <Vanta
                    effect="globe"
                    background={true}
                    options={{
                        color: 0x565ac0,
                        points: 8.0,
                        maxDistance: 20.0,
                        spacing: 16.0,
                        backgroundColor: 0x6061f
                    }}
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                />
                <Box sx={{
                    width: '100%',
                    maxWidth: '700px',
                    height: {
                        xs: '100vh',   // موبایل
                        sm: '100vh',   // تبلت
                        md: '600px',   // لپ‌تاپ و بالاتر
                    },
                    backgroundColor: 'rgba(255, 255, 255, 0.03)', // رنگ شفاف سفید
                    backdropFilter: 'blur(3px)', // محو کردن پشت باکس
                    WebkitBackdropFilter: 'blur(5px)', // برای مرورگر سافاری
                    borderRadius: '12px', // گرد کردن گوشه‌ها
                    border: '1px solid rgba(255, 255, 255, 0.1)', // حاشیه نازک شفاف
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', // سایه ظریف
                    display: 'flex',
                    alignItems: 'center',
                    // justifyContent: 'center',
                    flexDirection: "column",
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    paddingBlock: "40px",
                    paddingInline: 3,
                    gap: '16px',
                    zIndex: 1000,
                    textAlign: 'center'

                }}>
                    <Button variant='outlined' sx={{
                        backgroundImage: 'linear-gradient(135deg, rgba(0, 200, 255, 0.2) 0%, rgba(64, 224, 208, 0.2) 100%) !important',
                        border: "1px solid rgba(0, 200, 255, 0.4)",
                        color: '#00c8ff',
                        animation: `${glow} 2s ease-in-out infinite`,
                        height: '43px'
                        , fontFamily: 'RD2',
                        borderRadius: '50px',
                        padding: '10px 24px',
                        fontSize: "16px"
                    }}>
                        به‌زودی درکنار شما
                    </Button>
                    <Box >
                        <Box component="img"
                            src={logo}
                            sx={{
                                width: { xs: "70%", sm: "60%", md: "50%" },
                                height: "auto",
                                maxHeight: { xs: 80, sm: 100, md: 120 },
                                objectFit: "contain",
                            }}
                        />
                    </Box>
                    <Typography color='#b0c4de' fontFamily={'RD2'} fontSize={'28px'} fontWeight={300} >
                        پلتفرم توانبخشی آنلاین
                    </Typography>
                    <Box display={'flex'} flexDirection={'column'} gap={"20px"} height={'25%'} alignItems={'center'} justifyContent={'space-between'} pb={'10px'}>

                        <Typography fontFamily={'RD2'} color='#8a9bb5' fontSize={'18px'} >
                            ارائه خدمات کاردرمانی، گفتاردرمانی و فیزیوتراپی از راه دور
                        </Typography>
                        <Typography fontFamily={'RD2'} color='#8a9bb5' fontSize={'18px'} mt={'28px'} >
                            ...به‌زودی در کنار شما هستیم
                        </Typography>
                    </Box>

                    <Box pt={'16px'}>
                        <Button
                            variant='outlined'
                            component="a"
                            href="https://www.instagram.com/tavangar_.ir?igsh=bWpubXQzbnF2Znkz"
                            target="_blank"
                            rel="noopener noreferrer"

                            sx={{
                                fontFamily: 'RD2',
                                color: "#0a0e1a",
                                fontWeight: "700",
                                backgroundImage: "linear-gradient(135deg, #00c8ff 0%, #40e0d0 100%)",
                                transition: 'all 0.3s ease',
                                boxShadow: '0 8px 24px rgba(0, 200, 255, 0.4)',
                                borderRadius: "50px",
                                p: '10px',

                                // ریسپانسیو
                                fontSize: {
                                    xs: "12px",   // موبایل
                                    sm: "13px",   // تبلت
                                    md: "14px",   // لپ‌تاپ
                                },
                                padding: {
                                    xs: '12px 16px',   // موبایل
                                    sm: '14px 22px',   // تبلت
                                    md: '18px 28px',   // لپ‌تاپ
                                },
                                width: {
                                    xs: '100%',  // موبایل تمام عرض
                                    sm: '80%',   // تبلت کمی باریک‌تر
                                    md: 'auto',  // لپ‌تاپ اندازه اصلی
                                },

                                ":hover": {
                                    boxShadow: '0 12px 32px rgba(0, 200, 255, 0.6)',
                                    transform: 'translateY(-2px)',
                                },
                            }}
                        >
                            برای اطلاعات بیشتر پیج اینستاگرام را دنبال کنید
                        </Button>
                    </Box>

                </Box>


            </Box >




        </>
    )
}
