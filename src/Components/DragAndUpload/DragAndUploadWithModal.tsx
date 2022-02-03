import React, {ChangeEventHandler, useState} from 'react';
import {faCheckCircle, faCircleNotch, faExclamationCircle, faUpload} from "@fortawesome/free-solid-svg-icons";
import Style from './DragAndUpload.module.scss';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import {Form, Modal, Button } from 'react-bootstrap';

const DragAndUploadWithModal = () => {
    const [fileName, setFileName] = useState('');
    const [showModal, setShowModal] = useState(false)
    const [isFileProcessing, setIsFileProcessing] = useState(false);
    const [importSuccess, setImportSuccess] = useState(false);
    const onFileSelect: ChangeEventHandler<HTMLInputElement> = async e => {
        e.preventDefault();
        console.log(e.target.files);
        if (!e.target.files) return;
        // Actual upload logic here
        setIsFileProcessing(true)
        setFileName(e.target.files[0].name)
        // mimic the actual upload
        setTimeout((e) => {
            setImportSuccess(true);
            setIsFileProcessing(false);
        }, 4000);

    };
    const handleModalClose = () => {
        setShowModal(!showModal);
        setFileName('');
        setImportSuccess(false);
    };
    let modalDiag;
    let modalDiagClass = `${Style.file} `;
    if (!fileName && !importSuccess && !fileName) {
        modalDiag = (
            <>
                <FA
                    className='fa-5x mb-2'
                    icon={faUpload}
                    style={{ color: '#DDD' }}
                />
                <div
                    className='text-center fw-bold'
                    style={{ fontSize: '1.5rem' }}
                >
                    Drag file here and upload!
                </div>
            </>
        );
    } else if (isFileProcessing) {
        modalDiag = (
            <>
                <FA
                    className='fa-5x fa-spin mb-2'
                    icon={faCircleNotch}
                    style={{ color: '#4bc774' }}
                />
                <div className='text-center fw-bold'>
                    Uploading...
                </div>
            </>
        );
    } else if (!isFileProcessing && importSuccess && fileName) {
        modalDiagClass += `${Style.uploaded}`;
        modalDiag = (
            <div className='d-flex flex-column align-items-center overflow-auto'>
                <FA
                    className='fa-5x mb-2'
                    icon={faCheckCircle}
                    style={{ color: '#4bc774' }}
                />
                <span className='fw-bold'>
                    All set! {fileName} was uploaded.
                </span>
            </div>
        );
    } else if (!isFileProcessing && !importSuccess && fileName) {
        modalDiagClass += `${Style.uploaded}`;
        modalDiag = (
            <>
                <FA
                    className='fa-5x mb-2'
                    icon={faExclamationCircle}
                    style={{ color: '#F14568' }}
                />
                <div className='text-center fw-bold'>
                    Opps, it seems that something went wrong.
                </div>
            </>
        );
    }

    return (
        <div
            className='mx-auto h-50'
        >
            <Button
                className='btn-primary'
                onClick={() => {setShowModal(!showModal)}}
            >
                Click to pop up the upload model
            </Button>
            <Modal
                show={showModal}
                onHide={handleModalClose}
                centered
                size={'lg'}
            >
                <Modal.Header className='me-auto border-0' closeButton />
                <Modal.Body className='p-5 text-center text-indigo'>
                    <Form.Control
                        className={modalDiagClass}
                        type='file'
                        onChange={onFileSelect}
                    />
                    {modalDiag}
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default DragAndUploadWithModal;