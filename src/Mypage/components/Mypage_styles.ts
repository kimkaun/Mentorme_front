import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Pretendard', sans-serif;
  font-size: 1.1rem; 
`;

// 로고
export const FixedImage = styled.img`
  position: relative;
  top: 10px;
  left: 20px;
  width: 255px;
  height: 55px;
  z-index: 999;
  pointer-events: none; // 필요시 클릭 방지
`;

export const Section = styled.section`
  margin: 5rem 0; 
`;

export const Title = styled.h3`
  font-size: 1.8rem; 
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

// 프로필 부분
export const ProfileSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
    background-color: #eee;
    border-radius: 8px;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export const ProfileButton = styled.button`
  filter: grayscale(100%); // 흑백 처리
`;

export const ProfileImage = styled.img`
  object-fit: cover;
  border-radius: 8px;
`;

export const InfoRow = styled.p`
  margin: 0.5rem 0;
  filter: grayscale(100%); // 흑백 처리
`;

export const Input = styled.input`
  padding: 0.5rem;
  margin: 0.5rem 0;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

export const Select = styled.select`
  padding: 0.8rem;
  font-size: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;

  width: 300px; /* 너비 증가 */
  appearance: none; /* 기본 화살표 숨기기 */
  background: url('data:image/svg+xml;utf8,<svg fill="%23333" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>') no-repeat right 1rem center;
  background-color: white;
  background-size: 16px 16px;
  border: 1.5px solid #ccc;
`;


export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Tag = styled.button<{ selected?: boolean }>`
  padding: 0.5rem 1rem;
  background-color: ${({ selected }) => (selected ? '#2979ff' : '#f0f0f0')};
  color: ${({ selected }) => (selected ? '#fff' : '#000')};
  border: none;
  border-radius: 999px;
  cursor: pointer;
`;

// 관심 직무
export const JobList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  margin-top: 20px;
`;

export const JobItem = styled.div<{ isSelected: boolean }>`
  padding: 14px;
  font-size: 15px;
  text-align: center;
  border: 1px solid #ccc;
  background-color: #fff;
  cursor: pointer;

  ${({ isSelected }) =>
    isSelected &&
    `
      border-color: #2979ff;
      color: #2979ff;
    `
  }
`;

// 지식 · 기술 섹션
export const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const SkillTag = styled.div<{ isSelected: boolean }>`
  padding: 10px 16px;
  font-size: 1rem;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  cursor: pointer;
  text-align: center;

  ${({ isSelected }) =>
    isSelected &&
    `
      border-color: #2979ff;
      color: #2979ff;
    `}
`;

// 자격증
export const AddLicenseButton = styled.button`
  display: block;
  margin: 2rem auto 0 auto;
  background: none;
  border: none;
  color: #2979ff;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const LicenseInputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  input {
    flex: 1;
    padding: 0.8rem;
    font-size: 1rem;
    border: 1.5px solid #ccc;
    border-radius: 8px;
  }
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #888;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

