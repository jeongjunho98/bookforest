export default function PrivacyPage() {
  return (
    <div className="container" style={{ padding: '80px 0', maxWidth: '800px' }}>
      <h1 style={{ color: 'var(--primary-forest)', marginBottom: '40px' }}>개인정보처리방침</h1>
      <div style={{ lineHeight: '1.8', color: '#444' }}>
        <h3>1. 개인정보의 수집 및 이용 목적</h3>
        <p>회사는 회원가입, 원활한 고객상담, 서비스 제공을 위해 아래와 같은 개인정보를 수집하고 있습니다.</p>
        <br />
        <h3>2. 수집하는 개인정보 항목</h3>
        <p>이름, 이메일 주소, 비밀번호, 휴대폰 번호 등</p>
        <br />
        <p>... (회사는 고객님의 소중한 개인정보를 안전하게 보호하며 법령을 준수합니다.)</p>
      </div>
    </div>
  );
}
