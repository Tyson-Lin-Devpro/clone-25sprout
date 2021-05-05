import styled from '@emotion/styled';

const Content = styled.div`
  & > p{
    line-height:30px;
  };
`
const BackStage = () => {
  return (
    <Content>
      <p>
        有了 BackStage 後台管理系統，你可以隨時隨地管理你的網站與 APP。<br/>
        無論是活動消息、產品內容，或是銷售訂單和顧客資料，你都可以輕鬆享受即時管理的便利。
      </p>
    </Content>
  )
}

export default BackStage
