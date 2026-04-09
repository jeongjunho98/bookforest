import styles from './customer.module.css';

export default function CustomerCenterPage() {
  return (
    <div className="container" style={{ padding: '80px 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1>🌲 숲의 목소리 (고객센터)</h1>
        <p>무엇을 도와드릴까요? 숲의 안내자가 기다리고 있습니다.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ padding: '40px', border: '1px solid #eee', borderRadius: '15px', backgroundColor: '#fff' }}>
          <h3 style={{ marginBottom: '15px' }}>📞 전화 문의</h3>
          <p style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary-forest)' }}>010-4851-7984</p>
          <p style={{ marginTop: '10px', color: '#888' }}>평일 09:00 ~ 18:00 (주말/공휴일 휴무)</p>
        </div>
        <div style={{ padding: '40px', border: '1px solid #eee', borderRadius: '15px', backgroundColor: '#fff' }}>
          <h3 style={{ marginBottom: '15px' }}>💬 실시간 숲 톡</h3>
          <p>카카오톡에서 &quot;책갈피 숲&quot;을 검색해 주세요.</p>
          <button style={{ marginTop: '20px', width: '100%', padding: '15px', backgroundColor: '#FEE500', border: 'none', borderRadius: '8px', fontWeight: '700' }}>
            카카오톡 상담 시작
          </button>
        </div>
      </div>
    </div>
  );
}
