import { useNavigate } from 'react-router-dom';
const Notice = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div style={{fontSize: "30px" }}>Đây là bản web được clone lại nên lưu ý khách hàng khi sử dụng KHÔNG NHẬP CHÍNH XÁC thông tin cá nhân QUAN TRỌNG tránh trường hợp
                đáng tiếc không mong muốn xảy ra. </div>
            <div style={{ fontSize: "20px" }}> Mong quý khách đọc kĩ , nếu đồng ý xin nhấn "Next"</div>
            <button onClick={() => navigate('/firstpage')}>Next</button>
        </div>
    )
}
export default Notice;