import React from 'react'
import styled from 'styled-components'
import { FaCalendarTimes } from 'react-icons/fa'
import Typegraphy from '@material-ui/core/Typography'

import { ProjectObject } from '../../types/interfaces'
import { TechnologyStackItem } from './TechnologyStack'
import { ImageSlide } from './ImageSlide'

// const WechatWebsiteURL = 'https://www.wechat.com/';
// const HowToScanQRCode =
// 'https://help.wechat.com/cgi-bin/micromsg-bin/oshelpcenter?opcode=2&id=160527an7bii160527veeabv&lang=en&plat=android&Channel=helpcenter';

// const WechatQRCodeWrapper = styled.div`
//     display: flex;
//     flex-direction: column;
//     margin: 1rem auto;
//     width: fit-content;
// `;

// const WechatQRCodeImage = styled.img`
//     width: 240px;
//     height: 240px;
// `;

const DateRow = styled.div``
// const QuestionMarkIcon = styled(FaQuestionCircle)`
//     vertical-align: middle;
//     margin-left: 4px;
// `;

const Images = styled(ImageSlide)`
  margin-top: 56.7%;
`

// const WechatQRCode = (props: WechatQRCodeType) => {
//     let html = (
//         <a href={WechatWebsiteURL}>
//             <em>Wechat</em>
//         </a>
//     );
//     return (
//         <WechatQRCodeWrapper>
//             <WechatQRCodeImage src={props.image} alt='Wechat QR Code' />
//             <div>
//                 <span>Use {html} to scan the QR code</span>
//                 <span>
//                     <a href={HowToScanQRCode} rel='noopener noreferrer'>
//                         <QuestionMarkIcon color='#7CE0C4' size='16' />
//                     </a>
//                 </span>
//             </div>
//         </WechatQRCodeWrapper>
//     );
// };

const Wrapper = styled.div`
  text-align: left;
  padding: 2rem;
`

const StackRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;
  span {
    margin-right: 5px;
    margin-bottom: 5px;
  }
`
interface ProjectDetailProp {
  itemData: ProjectObject | null | undefined
}

const ProjectDetail = (props: ProjectDetailProp) => {
  const { itemData } = props
  if (!itemData) {
    return <Wrapper>Data Error</Wrapper>
  }

  return (
    <Wrapper>
      <Typegraphy variant='h2'>{itemData.title}</Typegraphy>
      <DateRow>
        <FaCalendarTimes />
        <Typegraphy variant='body1' component='span'>
          {itemData.start} - {itemData.end}
        </Typegraphy>
      </DateRow>
      <StackRow>
        {itemData.tech.split(',').map((item, index) => {
          return <TechnologyStackItem key={index} technology={item} />
        })}
      </StackRow>
      <Typegraphy variant='body1'>
        {itemData.description}
        <br />
        {itemData.responsibility}
      </Typegraphy>

      <Images width='100%' height='400px' images={itemData.images} />
      {/* {itemData.link ? (
                <div style={{ textAlign: `center`, marginTop: `1.5rem` }}>
                    <SingleButton
                        callback={() => {
                            window.open(itemData.link);
                        }}>
                        Detail
                    </SingleButton>
                </div>
            ) : null} */}
      {/* Wechat QR Code */}
      {/* {itemData.platform === 'wechat' && itemData.qrcode ? <WechatQRCode image={itemData.qrcode} /> : <></>} */}
    </Wrapper>
  )
}

export { ProjectDetail }
