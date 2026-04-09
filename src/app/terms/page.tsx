export default function TermsPage() {
  return (
    <div className="container" style={{ padding: '80px 0', maxWidth: '900px' }}>
      <h1 style={{ color: 'var(--primary-forest)', marginBottom: '40px', borderBottom: '2px solid #eee', paddingBottom: '20px' }}>책갈피 숲 이용약관</h1>
      <div style={{ lineHeight: '1.8', color: '#444', fontSize: '15px' }}>
        <section style={{ marginBottom: '30px' }}>
          <h3>제 1 조 (목적)</h3>
          <p>이 약관은 책갈피 숲(이하 &quot;회사&quot;)이 운영하는 인터넷 서점 서비스(이하 &quot;몰&quot;)에서 제공하는 서비스 및 제반 사항을 규정함을 목적으로 합니다.</p>
        </section>
        
        <section style={{ marginBottom: '30px' }}>
          <h3>제 2 조 (용어의 정의)</h3>
          <p>1. &quot;몰&quot;이란 회사가 재화 또는 용역을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화 등을 거래할 수 있도록 설정한 가상의 영업장을 말합니다.</p>
          <p>2. &quot;이용자&quot;란 &quot;몰&quot;에 접속하여 이 약관에 따라 서비스를 받는 회원 및 비회원을 말합니다.</p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h3>제 3 조 (약관의 명시와 개정)</h3>
          <p>회사는 이 약관의 내용과 상호, 영업소 소재지, 대표자의 성명, 사업자등록번호, 연락처 등을 이용자가 알 수 있도록 초기 서비스 화면에 게시합니다.</p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h3>제 4 조 (서비스의 제공 및 변경)</h3>
          <p>1. 몰은 재화 또는 용역에 대한 정보 제공 및 구매 계약의 체결, 배송 등의 업무를 수행합니다.</p>
          <p>2. 품절 또는 기술적 사양의 변경 등의 경우에는 장차 체결되는 계약에 의해 제공할 재화의 내용을 변경할 수 있습니다.</p>
        </section>

        <p style={{ color: '#888', marginTop: '50px' }}>이하 생략 - 상세한 이용약관은 관련 법령 및 회사의 운영 방침에 따릅니다.</p>
      </div>
    </div>
  );
}
