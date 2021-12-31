import './index.css';
import { Form, Input, Divider, InputNumber, Button } from 'antd';

function UploadPageComponent() {
    const onSubmit = (values) => {
        console.log('..... UploadPageComponent [onFinish onSubmit values]', values);
    };

    return (
        <div id="upload-container">
            <h1 className="tit-page">퍼피 업로드 페이지 에요!</h1>
            <Form name="puppy-upload" onFinish={onSubmit}>
                <Form.Item name="upload" label={<div className="upload-label">강아지 사진</div>}>
                    <div id="upload-img-placeholder">
                        <img src="/images/icons/camera.png" alt="camera" />
                        <span>이미지를 업로드 해주세요.</span>
                    </div>
                </Form.Item>

                <Divider />

                <Form.Item name="seller" label={<div className="upload-label">강아지 셀러</div>} rules={[{ required: true, message: '강아지 셀러를 입력 부탁용' }]}>
                    <Input className="upload-name" size="large" placeholder="강아지 셀러를 입력해 주세요." />
                </Form.Item>

                <Divider />

                <Form.Item name="name" label={<div className="upload-label">강아지 이름</div>} rules={[{ required: true, message: '강아지 이름 입력 부탁용' }]}>
                    <Input className="upload-name" size="large" placeholder="강아지 이름을 입력해 주세요." />
                </Form.Item>

                <Divider />

                <Form.Item name="status" label={<div className="upload-label">강아지 상태</div>} rules={[{ required: true, message: '강아지 기분 상태 입력 부탁용' }]}>
                    <InputNumber className="upload-status" size="large" defaultValue={0} />
                </Form.Item>

                <Divider />

                <Form.Item name="description" label={<div className="upload-label">강아지 소개</div>} rules={[{ required: true, message: '귀요미 강아지 소개 부탁용' }]}>
                    <Input.TextArea id="upload-description" size="large" placeholder="귀요미 강아지 소개를 적어주세요." showCount maxLength={300} />
                </Form.Item>

                <Form.Item>
                    <Button id="submit-button" size="large" htmlType="submit">
                        강아지 등록하기
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default UploadPageComponent;
