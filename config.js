// 초대장 설정값. 장소·참가비가 정해지면 null 대신 문자열을 넣는다 (null이면 화면에 ??? 표시)
window.INVITE_CONFIG = {
  title: '제1회 명덕외고 27기 영어과 동창회',
  date: '2027-01-09T18:00:00+09:00',
  place: null,
  fee: null,
  deadline: '2026-11-27',
  organizer: { name: '전혜서', phone: '010-8958-3383' },
  // 구글폼 ID와 질문별 entry ID (미리 채워진 링크에서 확인). 비어 있으면 응답은 이 기기에만 남음
  // attend 값은 폼 객관식 보기 글자와 정확히 같아야 한다: 갈게 / 아직 몰라 / 못 가
  form: {
    id: '1FAIpQLSdm7-v2tL3hJVkSUxKrmOtsrsdnJIcgrzIXxcp1-RdZoscZMg',
    entries: { name: 'entry.603496198', attend: 'entry.508198678', message: 'entry.1206486928' },
  },
};
