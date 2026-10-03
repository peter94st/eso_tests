import { Layout, } from "antd"
import { Outlet } from "react-router-dom"
import logo from '../assets/logo/main_logo.png'


const { Header, Content, Footer } = Layout

export function MainLayout () {
    return (
        <Layout style={{ minHeight: '100svh' }}>

            <Header style={{ display: 'flex', alignItems: 'center', height: '64px' }}>
                <img 
                    src={logo} 
                    alt="Main-logo"
                    style={{
                        height: '90%',
                        width: 'auto',
                        objectFit: 'contain'
                    }}    
                />
            </Header>

            <Content style={{ 
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center', 
                flexDirection: 'column'
            }}>
                <Outlet />
            </Content>

            <Footer style={{ textAlign: 'center', height: '64px' }}>
                Created by devpet64
            </Footer>

        </Layout>
    )
}