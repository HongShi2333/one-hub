import { Box, Typography, Button, Container, Stack } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { GitHub } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const BaseIndex = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 136px)',
        backgroundImage: 'linear-gradient(to right, #ff9966, #ff5e62)',
        color: 'white',
        p: 4
      }}
    >
      <Container maxWidth="lg">
        <Grid container columns={12} wrap="nowrap" alignItems="center" sx={{ minHeight: 'calc(100vh - 230px)' }}>
          <Grid md={7} lg={6}>
            <Stack spacing={3}>
              <Typography variant="h1" sx={{ fontSize: '4rem', color: '#fff', lineHeight: 1.5 }}>
                One Hub
              </Typography>
              <Typography variant="h4" sx={{ fontSize: '1.5rem', color: '#fff', lineHeight: 1.5 }}>
                由 不会玩电路的红石 使用one-api搭建的API网站 <br />
                支持OpenAI以及Google Gemini的部分模型 <br />
                支持的模型列表请查看 关于 页面
              </Typography>
              <Button
                variant="contained"
                startIcon={<Language />}
                href="https://home.hongshi.us.kg"
                target="_blank"
                sx={{ backgroundColor: '#24292e', color: '#fff', width: 'fit-content', boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)' }}
              >
                我的主页
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BaseIndex;
