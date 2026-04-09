export default function PrivacyPage() {
  return (
    <div className="container" style={{ padding: '80px 0', maxWidth: '900px' }}>
      <h1 style={{ color: 'var(--primary-forest)', marginBottom: '40px', borderBottom: '2px solid #eee', paddingBottom: '20px' }}>개인정보처리방침</h1>
      <div style={{ lineHeight: '1.8', color: '#444', fontSize: '15px' }}>
        <section style={{ marginBottom: '30px' }}>
          <h3>1. 개인정보 수집 및 이용 목적</h3>
          <p>회사는 회원가입, 원활한 고객상담, 서비스 제공을 위해 최소한의 개인정보를 수집하고 있습니다. 수집된 정보는 목적 이외의 용도로 사용되지 않습니다.</p>
        </section>
        
        <section style={{ marginBottom: '30px' }}>
          <h3>2. 수집하는 개인정보 항목</h3>
          <p>회원가입 시: 이름, 이메일, 비밀번호, 휴대폰 번호</p>
          <p>주문 시: 배송지 주소, 수령인 성함, 결제 수단 정보</p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h3>3. 개인정보의 보유 및 이용기간</h3>
          <p>이용자의 개인정보는 원칙적으로 목적이 달성되면 지체 없이 파기합니다. 단, 관련 법령(상법, 전자상거래법 등)에 의해 보존할 필요가 있는 경우 일정 기간 보관합니다.</p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h3>4. 개인정보의 제3자 제공</h3>
          <p>회사는 이용자의 동의 없이 개인정보를 제3자에게 제공하지 않습니다. 단, 배송 업무 등 서비스 이행을 위해 필요한 경우에 한하여 위탁할 수 있습니다.</p>
        </section>

        <p style={{ color: '#888', marginTop: '50px' }}>이하 생략 - 회사는 고객님의 개인정보를 소중히 보호합니다.</p>
      </div>
    </div>
  );
}
