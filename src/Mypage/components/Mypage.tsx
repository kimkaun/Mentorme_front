import React, { useState, useMemo } from "react";
import {
    Container,
    FixedImage,
    Section,
    Title,
    ProfileSection,
    ProfileImage,
    ProfileButton,
    InfoRow,
    Select,
    JobList,
    JobItem,
    SkillList,
    SkillTag,
    AddLicenseButton,
    LicenseInputRow,
    RemoveButton,
} from "./Mypage_styles";
// 로고 import
import logoImg from "../../img/Mentorme.png";
// 프로필 사진 import
import profile from "../../img/ko.jpg";

const jobOptions = [
    '기획·전략', '마케팅·홍보·조사', '회계·세무·재무', '인사·노무·HRD', '총무·법무·사무',
    'IT개발·데이터', '디자인', '영업·판매·무역', '고객상담·TM', '구매·자재·물류',
    '상품기획·MD', '온라인·운송·배송', '서비스', '생산', '건설·건축', '의료',
    '연구·R&D', '교육', '미디어·문화·스포츠', '금융·보험', '공공·복지'
];

const skillOptions = [
    'React', 'Javascript', 'JAVA', 'CSS', '의사소통',
    'TypeScript', 'HTML', 'MySQL', 'Redux', '명확성',
    'Git', 'Angular', 'ReactJS', 'AWS', '분석력',
    'RDBMS', 'JPA', 'Spring Boot', 'Jquery', '경쟁력'
];

const Mypage = () => {
    // 직무
    const [selectedJobs, setSelectedJobs] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    // 기술
    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
    const [skillSearchTerm, setSkillSearchTerm] = useState("");
    // 자격증
    const [licenses, setLicenses] = useState<License[]>([]);
    const [showInputs, setShowInputs] = useState(false); // ← 초기엔 false

    // 직무선택
    const toggleJob = (job: string) => {
        setSelectedJobs(prev =>
            prev.includes(job) ? prev.filter(j => j !== job) : [...prev, job]
        );
    };

    const filteredJobs = useMemo(() => {
        return jobOptions.filter(job =>
            job.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);


    // 기술선택
    const toggleSkill = (skill: string) => {
        setSelectedSkills(prev =>
            prev.includes(skill)
                ? prev.filter(s => s !== skill)
                : [...prev, skill]
        );
    };

    const filteredSkills = skillOptions.filter(skill =>
        skill.toLowerCase().includes(skillSearchTerm.toLowerCase())
    );


    // 자격증 부분
    type License = {
        name: string;
        issuer: string;
        date: string;
    };

    const handleAddClick = () => {
        setShowInputs(true); // 첫 클릭 시 입력창 보이기
        setLicenses([{ name: '', issuer: '', date: '' }]); // 하나의 빈 입력 추가
    };

    const handleAddLicense = () => {
        setLicenses([...licenses, { name: '', issuer: '', date: '' }]);
    };

    const handleRemoveLicense = (index: number) => {
        const updated = [...licenses];
        updated.splice(index, 1);
        setLicenses(updated);
    };

    const handleChange = (index: number, field: string, value: string) => {
        const updated = [...licenses];
        updated[index][field] = value;
        setLicenses(updated);
    };

    return (
        <>
            <FixedImage src={logoImg} alt="로고" />
            <Container>
                {/* 프로필 섹션 */}
                <Section>
                    <ProfileSection>
                        <div>
                            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "1rem" }}>
                                <h1 style={{ margin: 0, fontSize: "1.6rem" }}>김민주</h1>
                                <Select style={{ minWidth: "140px", marginBottom: 0 }}>
                                    <option>신입</option>
                                    <option>경력</option>
                                </Select>
                            </div>
                            <p>2007 (18세)</p>
                            <InfoRow>📧 s23**@e-mirim.hs.kr</InfoRow>
                            <InfoRow>📞 010-****-4254</InfoRow>
                            <InfoRow>🏠 경기 부천시 오정구 작동로 54번길 7</InfoRow>
                        </div>
                        <div>
                            <ProfileImage src={profile} alt="profile" />
                            <ProfileButton>✏️</ProfileButton>
                        </div>
                    </ProfileSection>
                </Section>

                {/* 관심 직무 */}
                <Section>
                    <Title>선호 정보</Title>
                    <div style={{ position: "relative", width: "950px", marginBottom: "10px" }}>
                        <input
                            type="text"
                            placeholder="직업(직무) 또는 전문분야 입력"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            style={{
                                padding: "12px 48px 12px 16px",
                                border: "1.5px solid #ccc",
                                width: "1000px",
                                fontSize: "1rem",
                                boxSizing: "border-box",
                            }}
                        />
                    </div>
                    <JobList>
                        {filteredJobs.map(job => (
                            <JobItem
                                key={job}
                                isSelected={selectedJobs.includes(job)}
                                onClick={() => toggleJob(job)}
                            >
                                {selectedJobs.includes(job)}{job}
                            </JobItem>
                        ))}
                    </JobList>
                </Section>


                {/* 학력 */}
                <Section>
                    <Title>학력</Title>
                    <Select>
                        <option>고등학교 이하</option>
                        <option>고등학교</option>
                        <option>고등학교 졸업</option>
                        <option>대학교</option>
                        <option>대학교 졸업</option>
                    </Select>
                    <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <input
                            type="checkbox"
                            style={{ width: "20px", height: "20px", accentColor: "#2979ff" }}
                        />
                        졸업예정
                    </label>
                </Section>

                {/* 경력 */}
                <Section>
                    <Title>경력</Title>
                    <Select>
                        <option>1년 이하</option>
                        <option>1년</option>
                        <option>2년</option>
                        <option>3년</option>
                        <option>4년</option>
                        <option>5년 이상</option>
                    </Select>
                </Section>

                {/* 기술 */}
                <Section>
                    <Title>지식 · 기술</Title>
                    <div style={{ position: "relative", width: "100%", maxWidth: "950px", marginBottom: "20px" }}>
                        <input
                            type="text"
                            placeholder="찾으시는 스킬이 있나요?"
                            value={skillSearchTerm}
                            onChange={e => setSkillSearchTerm(e.target.value)}
                            style={{
                                padding: "12px 48px 12px 16px",
                                border: "1.5px solid #ccc",
                                width: "1000px",
                                fontSize: "1rem",
                                boxSizing: "border-box",
                            }}
                        />
                    </div>

                    <SkillList>
                        {filteredSkills.map(skill => (
                            <SkillTag
                                key={skill}
                                isSelected={selectedSkills.includes(skill)}
                                onClick={() => toggleSkill(skill)}
                            >
                                {selectedSkills.includes(skill) ? '✔' : '+'} {skill}
                            </SkillTag>
                        ))}
                    </SkillList>
                </Section>

                {/* 자격증 */}
                <Section>
                    <Title>자격증</Title>
                    {/* 입력창은 showInputs가 true일 때만 렌더링 */}
                    {showInputs &&
                        licenses.map((license, index) => (
                            <LicenseInputRow key={index}>
                                <input
                                    type="text"
                                    placeholder="자격증명"
                                    value={license.name}
                                    onChange={(e) => handleChange(index, 'name', e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="발행처"
                                    value={license.issuer}
                                    onChange={(e) => handleChange(index, 'issuer', e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="취득일"
                                    value={license.date}
                                    onChange={(e) => handleChange(index, 'date', e.target.value)}
                                />
                                <RemoveButton onClick={() => handleRemoveLicense(index)}>✕</RemoveButton>
                            </LicenseInputRow>
                        ))}

                    {/* 버튼은 항상 보임 */}
                    <AddLicenseButton onClick={showInputs ? handleAddLicense : handleAddClick}>
                        + 자격증 추가
                    </AddLicenseButton>
                </Section>
            </Container>
        </>
    );
};

export default Mypage;
