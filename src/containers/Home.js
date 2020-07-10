import React from 'react';
import { Carousel } from 'react-bootstrap'
import './Home.scss'

const Home = () => {
    return (
        <Carousel className="carousel_container">
            <Carousel.Item className="bg-arreglo bg1"> 
                {/* <img
                className="d-block w-100 img-arreglo"
                src=""
                alt="First slide"
                /> */}
                {/* <Carousel.Caption>
                    <h3>Galeria</h3>
                    <p>Galeria</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item className="bg-arreglo bg2" />
            <Carousel.Item className="bg-arreglo2 bg3" />
        </Carousel>
        // return(
        //     <React.Fragment>
        //         <Carousel />
        //         {/* <p>Hola Home</p>
        //         <figure className="img">
        //         <img className="img_premium" src="https://uiy9za.ch.files.1drv.com/y4mq5s_U2WysPaMgWBmQ7QOWW7n0E--d0MGrbem7LHuWFiq3X1QdfB2HTUW1L4Gxg63cxu1_myLda5d0KYZUpprIohSoRpwXuGUPPUf_1Zb4BIxAqxkJo_L6iFg8ja41YagOvuhEKsQScaUCGrnEl2b2iuRmzqXq8xv-9oLptkEO4CTbuZE3izs4xUSDSwZGhj2QrXr8Bzp-9qv9j62G2-7ig?width=1080&height=810&cropmode=none" />
        //         <img className="img_premium" src="https://toy9za.ch.files.1drv.com/y4mISXO3s9GEnQ-aUaBM7QrBCxXlCQtZpfSvDC6ED-KncSUCq7DZdvAMPovsVQ8y4vfYB4XvIHyBY9XuhUuI5JboNOyiow8KkNtzjg860sgUxDrPn6xgu3LhshyJG3QYGzzSRPBQnYY1Ksrehto4WwNRgTZXk7ZyQQUomJxjTtiSBW3AR2rynB_0M8GfOsdN0wJWm4N-1q9KBWMqtm9hyAnxQ?width=960&height=720&cropmode=none" />
        //             <img className="img_premium" src="https://tyy9za.ch.files.1drv.com/y4m90Z_bCepTnjfP5kg3MOkGVn0x1RNP4uUyQgHDN_cf8gaOK91BulA43BbhW6sLTqMyV6Qx87luXi4ybZC-ig_1fCQtTs1e8288OWiG_MaeZILyYbbAxbAyD-Sw7QZBE87O11aj26VToV3A6KGulj8Dy0xhdXWsab_vctU4G1gc47D-wRexjb8V3nCjakDMiYIsn7TNqp4T53YhvJYPPQOYA?width=1080&height=810&cropmode=none" />
        //             <img className="img_premium" src="https://voxyqq.ch.files.1drv.com/y4mDAoio9Z08nnf5YQ4AFF-HglsOZf9luKQvt4RCIdBpRJXaS_8vBOTlIyTf9vOQf3mjG64VsrHt1VpGvNo8i6Uzote7pgBvqtu7FywFxJgUBHy4j5icjcR_FFbOJ3a_5vonkN-karwIdJTHZst0ndlwWd3xY6Le-ucnDmQnZ30mILWtgYlbdGDUerXMWUAv_-OChAMJTr08uPIsmSfo667Iw?width=400&height=400&cropmode=none" />
        //             <img className="img_premium" src="https://vyxyqq.ch.files.1drv.com/y4meoE1qqXwYi_25khxv3cdcbU2Pwy6JCluduKFc29jNVmkszfejh0jr05TcXE5N9qPITxhf2VKfR04OeZNszTEBmJ-LZVQKDbcw3xMatv_neljuH9emIDuMBD6gaQJssk71ULJXf0g6_YObVUz3FyJIWgt6eL11CYPCa9qZJSjVf7B7HZd7V3cnukJPbM50KoDhkYnFKb4yE0GMU0O6kS0Tw?width=960&height=720&cropmode=none" />
        //             <img className="img_premium" src="https://vixyqq.ch.files.1drv.com/y4mK3uBqYAA-3E9PLKvdh42g0XpnpocX44mrJCPjCJ77mHSIwGILs5d5mNIzi5YwPk7DsPDuXyHT5iPv8BvnyuzS7sawCM4IzzY-MQezIRr7huVlj-u67I9HUdgX6NPH-PZzFvq61QqXj_bVKAs6mQ2CqYlN7wekEEmBFyLybACFbntt-4ZI10jjCOMVNyILHjs5KGunonrPm06upIUaIaeOQ?width=1080&height=810&cropmode=none" />
        //             <hr />
        //             <img className="img_premium" alt="cliente1" src="https://hxhfza.ch.files.1drv.com/y4mxT7zmR4_8kdNrnUliY95tHVBLE3aAu5_hUWgKQuFtiiPXpzSdb2Y_4Y5wmAXoDpAQdK2HWYfTfyY--zMr7tyaPMXsDe8uzTVrKZanH-CLMLCvggfDMyID5shScRrcxTaWDHBNXOe17cHSshYzmOjvDL5fgjtXA2gmM6tSSSwo6Lk20Cs3QYPGqAkH9ptnp3kktfI0nuODC6V_nFBOfItDA?width=1280&height=960&cropmode=none" />
        //             <img className="img_premium" alt="cliente2" src="https://ibhfza.ch.files.1drv.com/y4m157lUyVa0SH7jlLtLpDdyrGNOqZmznlkYyDf5ACKNCn7bvxLirzjDJxGM2UqWnEcakBHGu1_j2rLyS0T4IyJdciup1Sp3HQxdT3hXc4434OYXgkD47FibdoIjBmhx1Y5pdMV4yLzxCrvdsBgVQ0XL4ew973F5K5DK5OBsEfv1J4iacxhUBFHJuMZL2eVNicOSr2HrPGuCS-RgBWXb0gbUQ?width=960&height=720&cropmode=none" />
        //             <img className="img_premium" alt="cliente3" src="https://ihhfza.ch.files.1drv.com/y4mEjPn74KKJcIk9Ia1Xex_lhdpYQBb4UKxlYKDd2xjyE4B7Sqm6H1Y74nxKR8kwTQkWl5s9YdZY2d4-L9IgSulDUcf5sUSxisSEvj_U4UpYCocccQ5IX6c0-EK_GH4j0ALjiW3ain0x7j3s88pfg2g-ALqferxR2HzL3RIFj_Mq_sEb_t4NyprsMcn-tSfjOyQbhY4Vu7iV_CHnmZteCL6Ag?width=2040&height=1530&cropmode=none" />
        //             <img className="img_premium" alt="cliente4" src="https://ixhfza.ch.files.1drv.com/y4mmQX9wdjnnGoY2AtBA2ddGAM0GAptM0ir16o2V8ryIgYHkze9wn8As5OL2WiOLzsif0wULnhoH8ggAlZSqLs6NFPJR0OjS5H5PHgqFjMtlL0G3RLAbe-4jcrFUeowEca-IGZe7Fcn9p2DDZH7frVX_kr1lBkLFQI9fweNtdPU7v7pFa2l6ftZOZs-WL_56Fkt1qdTyoNTSrmbU1petcIHfA?width=2040&height=1530&cropmode=none" />
        //             <img className="img_premium" alt="cliente5" src="https://ghiqvw.ch.files.1drv.com/y4maDEvrEQKxbK6nTcGg7_RoalMWTzxBznZOHijbeovQPRUNUIZ8AHTpK4McCVl0IRpdUad6QYcqiBOppQTQ45rG8s5S0acm_efDmDlmiZ4tS_u_uyjza6_B2m0aleXCshAx9aP79G8TO2UHcTssHaUluGErk2jOwpOOVNjufufVWh2MigfC1B1YhAq-wP94V86lKyX7V2vJSsYNeTTIBkbGg?width=1530&height=2040&cropmode=none" />
        //             <img className="img_premium" alt="cli_bre1" src="https://irhfza.ch.files.1drv.com/y4mJkOi63T95XJa3T_WzIcJ9H3Bg3FQXV63NzRcW4tiWYiWW26BHmo2lSPLOwCZEPbqa76PbN8yMjL4WsRHTgTDy0ieLw0NeVczymEPVthTjj7VgRkuxm790DyhzvkhvtNTQo9hsRGx6isL3eYRabdJvG2LqMCrFF1AsHEYiLMGkUMzh06OJK5CFavOYu9dxsJc0RT3Oap56q068Ur-Egiigg?width=1530&height=2040&cropmode=none" />
        //             <img className="img_premium" alt="pre_auto1" src="https://hbiqvw.ch.files.1drv.com/y4mvebnH9DVPrls6jaFFyChmQElCUMRS5Qdq-VgQL8M8y9Wy8EUh3ardH5RzDCvocEjuQXKP2Wo51yDUGI2qoY2T6N1jHUASf-A6oXZTZabtOgkYjzfqxVj4Y5d8kKPqOfZKH01nAYURaOnmMu0J-6gI9HA40NP29CEj9aAPS9X0Rbybe12budX3OiHjksxHtgWqdHTTzUYiqUL4IdU8wdO4g?width=2040&height=1530&cropmode=none" />
        //             <img className="img_premium" alt="pre_auto2" src="https://hriqvw.ch.files.1drv.com/y4m-35DZyYEiaG5aBlTdpg_lbWmSob8XVJ5dDpCA44sQ7vLWiUTy8Bi1kfdczXHjtjMQ4cBX22kpjiLwiy1oSPDZ3o7BSvhB79kUvg29EptxAGTgeD_bhyRCwQuQSofIARcVOAdwC_d9dpveIboquUmNgZYhX_3yLpd1P0nkOh_jFfSNKAAzp8Udb68wPwqtXwQtwiYhC1CFtwMW3jylW3XJg?width=2040&height=1530&cropmode=none" />
        //             <img className="img_premium" alt="pre_auto3" src="https://hhiqvw.ch.files.1drv.com/y4mPEFmFG0Ag6cn-bTC-OiyTBpsuy81zVmygDL56Z5GOLrf0ZO_MxplHRNg4hJMPT_tJwPdU9_55MsxHx3zKMolyjKRRftC2WrlwHTrj-wJne3gvD_dY0LcwyEz7QSm0R4VO2bKy2EUaMdKI94BexpU2inDtKtOGPzyUHxws8SP5Akaci0yrToYGhJbUBvLoKbB5DaUcGOlPxS46B4iWDGBog?width=2040&height=1530&cropmode=none" />
        //             <img className="img_premium" alt="cliente6" src="https://gxiqvw.ch.files.1drv.com/y4mEyb3uNdQvnbR6lDFalFbNBA08iuEsAyqYtEOdIkv2It_us_QVTkyam3q5PTUd3GA87hD_MN2e-3E0NiJPpJ1yNZR4dnhjKqW83arW8w93sqB1PaV6UNfrh8LVZTTKhIcUVpVxTrMwO1K371ThC1OPzTKCHIaeOSejjkAOZYqoeJxB8HKLx_cl851LMRh6FWeepcYCjORrSSESUoRsiY-BQ?width=960&height=720&cropmode=none" />
        //             <img className="img_premium" alt="pre_auto4" src="https://hxiqvw.ch.files.1drv.com/y4mnHB_rI8SCU6OE7NuxsamDI-5S1d_MgQ7ICvsM60FiZxo8-jauH_vl3BbtYT8ETOnDK-8YuPZLpA32e6Y0c47EmYM_eP2eOGhQKjkLlzMR8ZzzlFCWiylcDZUGl_54WhjMhUnEUOfww9xpe0vCLv4_qJyNBlDpLFruOu4fKtt-HJ3lQsWoDH7vGBPRDR0dQtvzncOyR0bvRS92I4V35a3mQ?width=2048&height=1536&cropmode=none" />
        //             <img className="img_premium" alt="pre_auto5" src="https://ibiqvw.ch.files.1drv.com/y4mVua6Qk-QM5tZ8yH6Xfmd4TmbJ-Z3AZx19Lk3P0xHkpEMhLFC8nmLkzpLSC9qOi0EXKwDxGhp1Fy6MpZ8nmy_cXThG_WIDM4XCCOBDlv73nxcEUnVxYtZo2KVVzKxghd_ZUvMrGjXvlZw_jiM3KQdhtq5u_jWllwRJ4x-70_Bbn7DJe0Ii__llDeipVrcgdFJqMmIaGeOJ1wiTQrRZ1DLhA?width=2048&height=2039&cropmode=none" />
        //         </figure> */}
        //     </React.Fragment>
        // )
    )
}
export default Home;