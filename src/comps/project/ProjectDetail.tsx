import React from 'react';
import styled from 'styled-components';
import { FaCalendarTimes, FaChartArea, FaQuestionCircle } from 'react-icons/fa';
import { ProjectObject } from '../../types/interfaces';
import { TechnologyStackItem } from './TechnologyStack';
import { ImageSlide } from '../ImageSlide';
import SingleButton from '../SingleButton';

const WechatWebsiteURL = 'https://www.wechat.com/';
const HowToScanQRCode =
    'https://help.wechat.com/cgi-bin/micromsg-bin/oshelpcenter?opcode=2&id=160527an7bii160527veeabv&lang=en&plat=android&Channel=helpcenter';

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

const DateRow = styled.div`
    font-family: Menlo, Monaco, monospace, 'Courier New';
`;
const QuestionMarkIcon = styled(FaQuestionCircle)`
    vertical-align: middle;
    margin-left: 4px;
`;

const Images = styled(ImageSlide)`
    margin-bottom: 1.5rem;
`;

interface WechatQRCodeType {
    image: string;
}

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
    margin: 1.5rem 0;
    span {
        margin-right: 5px;
        margin-bottom: 5px;
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
            <h4>{itemData.title}</h4>
            <DateRow>
                <FaCalendarTimes /> <span>{itemData.start}</span> - <span>{itemData.end}</span>
            </DateRow>
            <StackRow>
                {itemData.tech.split(',').map((item, index) => {
                    return <TechnologyStackItem key={index} technology={item} />;
                })}
            </StackRow>
            <p>
                {itemData.description}
                <br />
                {itemData.responsibility}
            </p>

            <Images width='100%' height='300px' images={itemData.images} />
            {itemData.link ? (
                <div style={{ textAlign: `center`, marginTop: `1.5rem` }}>
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
