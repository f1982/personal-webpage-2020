import React from 'react'
import {
  fireEvent,
  getAllByRole,
  getByRole,
  getByTestId,
  render,
  screen
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ProjectList from './index'

describe('test project list component', () => {
  const data = JSON.parse(`[
        {
          "id": "114",
          "type": "coding",
          "platform": "Web",
          "title": "Cyber Vertex News Portal",
          "description": "The Cyber Vertex project integrates cybersecurity and digital forensics news data and learning resources. Provide a one-stop network security-related content provision platform. It also provides some social functions, to help learners to communicate and learn in a technical community. It may promote the development of cybersecurity and digital forensics field.",
          "responsibility": "Use Docker Compose to build container configurations to support the development environment and production environment of the project; Deploy the website and services into AWS EC2; Domain name binding and SSL certificate installation; Proposal a revised architectural design based on current best practices and industry trends; Add new features; Project bugs fixing and UI/UE optimization.",
          "state": "release",
          "icon": "",
          "qrcode": "",
          "cover": "cyvertex-cover.jpg",
          "start": "2020",
          "end": "2020",
          "images": ["cyvertex-01.jpg", "cyvertex-02.jpg", "cyvertex-03.jpg"],
          "tech": "Laravel,Vue.js,MySQL,Docker Compose,Amazon AWS",
          "link": "https://cyvertex.com",
          "github": "",
          "video": "",
          "language": "en",
          "quote": ""
        },
        {
          "id": "113",
          "type": "coding",
          "platform": "Web",
          "title": "CCTV.com",
          "description": "China Central Television is the predominant public television broadcaster in Mainland China. CCTV has a network of 50 channels broadcasting different programmes and is accessible to more than one billion viewers. The cctv.com is the portal of CCTV.",
          "responsibility": "Responsible for the construction of UGC website, team management, development and maintenance of video player (Flash & HTML5) and multi-functional upload components.",
          "state": "release",
          "icon": "",
          "qrcode": "",
          "cover": "cctv.com-cover.jpg",
          "start": "2009",
          "end": "2013",
          "images": ["cctv.com-01.jpg", "cctv.com-02.jpg"],
          "tech": "HTML,Javascript,JQuery,Flash,PHP",
          "link": "https://www.cctv.com",
          "github": "",
          "video": "",
          "language": "zh-cn",
          "quote": ""
        },
        {
          "id": "112",
          "type": "coding",
          "platform": "Wechat",
          "title": "QDD",
          "description": "Multi-player real-time online competitive games, users can layout football players and start a competition. You can exchange points by battles and get corresponding prizes.",
          "responsibility": "Responsible for the idea, project development and maintenance.",
          "state": "release",
          "icon": "",
          "qrcode": "quduoduo_qrcode.jpg",
          "cover": "quduoduo-cover.jpg",
          "start": "2018",
          "end": "2018",
          "images": ["quduoduo-01.jpg", "quduoduo-02.jpg"],
          "tech": "Javascript,PHP,Workerman,Wechat",
          "link": "",
          "github": "",
          "video": "",
          "language": "en",
          "quote": "It's a very good game"
        }
      ]
      `)

  //   console.log(data);
  test('should display properly', () => {
    const { getByText, getAllByRole, getAllByTitle } = render(
      <ProjectList itemData={data} />
    )
    expect(getByText('Cyber Vertex News Portal')).toBeInTheDocument()
    expect(getByText('CCTV.com')).toBeInTheDocument()
    expect(getByText('QDD')).toBeInTheDocument()

    expect(getAllByTitle(/Show detail of project/i).length).toBe(3)
  })

  test('should callback event work', () => {
    const eventCallback = jest.fn()
    const { getAllByTitle } = render(
      <ProjectList itemData={data} eventHandler={eventCallback} />
    )
    fireEvent.click(getAllByTitle(/Show detail of project/i)[0])
    expect(eventCallback).toBeCalledTimes(1)
  })
})
