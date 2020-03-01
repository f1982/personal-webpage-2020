import React from 'react';
import styled from 'styled-components';
import { FaCalendarTimes, FaChartArea, FaQuestionCircle } from 'react-icons/fa';
import { ProjectObject } from '../../types/interfaces';
import { TechnologyStackItem } from './TechnologyStack';
import { ImageSlide } from '../ImageSlide';
import Button from '../SingleButton';
import SingleButton from '../SingleButton';

const baseUrl =
    process.env.NODE_ENV === 'development'
        ? process.env.REACT_APP_STATIC_BASES_URL_TEST
        : process.env.REACT_APP_STATIC_BASES_URL;

const WechatQRCodeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem auto;
    width: fit-content;
`;

const WechatQRCodeImage = styled.img`
    width: 240px;
    height: 240px;
`;

const QuestionMarkIcon = styled(FaQuestionCircle)`
    vertical-align: middle;
    margin-left: 4px;
`;
interface WechatQRCodeType {
    image: string;
}

const WechatWebsiteURL = 'https://www.wechat.com/';
const HowToScanQRCode =
    'https://help.wechat.com/cgi-bin/micromsg-bin/oshelpcenter?opcode=2&id=160527an7bii160527veeabv&lang=en&plat=android&Channel=helpcenter';

const WechatQRCode = (props: WechatQRCodeType) => {
    let html = (
        <a href={WechatWebsiteURL}>
            <em>Wechat</em>
        </a>
    );
    return (
        <WechatQRCodeWrapper>
            <WechatQRCodeImage src={props.image} alt='Wechat QR Code' />
            <div>
                <span>Use {html} to scan the QR code</span>
                <span>
                    <a href={HowToScanQRCode} rel='noopener noreferrer'>
                        <QuestionMarkIcon color='#7CE0C4' size='16' />
                    </a>
                </span>
            </div>
        </WechatQRCodeWrapper>
    );
};

const Wrapper = styled.div`
    text-align: left;
`;

const StackRow = styled.div`
    display: flex;
    flex-wrap: wrap;

    span {
        margin-right: 5px;
    }
`;

const ChartArea = styled(FaChartArea)`
    vertical-align: middle;
`;

interface ProjectDetailProp {
    itemData: ProjectObject;
}

const ProjectDetail = (props: ProjectDetailProp) => {
    const { itemData } = props;

    return (
        <Wrapper>
            <h3>{itemData.title}</h3>
            <div>
                <FaCalendarTimes /> <span>{itemData.start}</span> - <span>{itemData.end}</span>
            </div>
            <StackRow>
                {itemData.tech.split(',').map((item, index) => {
                    return <TechnologyStackItem key={index} technology={item} />;
                })}
            </StackRow>
            <div>
                <h5>
                    <ChartArea /> Description
                </h5>
            </div>
            <p>{itemData.description}</p>
            <h5>Responsibility</h5>
            <p>{itemData.responsibility}</p>

            <ImageSlide width='100%' height='300px' images={itemData.images}></ImageSlide>
            {itemData.link ? (
                <div style={{ textAlign: `center` }}>
                    <SingleButton
                        callback={() => {
                            window.open(itemData.link);
                        }}>
                        Detail
                    </SingleButton>
                </div>
            ) : null}
            {/* Wechat QR Code */}
            {itemData.platform === 'wechat' && itemData.qrcode ? <WechatQRCode image={itemData.qrcode} /> : <></>}
        </Wrapper>
    );
};

export { ProjectDetail };
