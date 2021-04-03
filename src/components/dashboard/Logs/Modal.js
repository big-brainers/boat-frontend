import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
	background-color: rgba(0, 0, 0, 0.4);
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: 1;
	overflow: auto;
`;

const ModalWrapper = styled.div`
	width: 800px;
	height: 500px;
	box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
	background: #fff;
	color: #000;
	display: grid;
	grid-template-columns: 1fr 1fr;
	position: relative;
	z-index: 10;
	border-radius: 10px;
`;

const ModalContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	line-height: 1.8;
	color: #141414;

	p {
		margin-bottom: 1rem;
	}

	button {
		padding: 10px 24px;
		background: #141414;
		color: #fff;
		border: none;
	}
`;

const Modal = ({ showModal, setShowModal }) => {
    return (
			<>
				{showModal ? (
					<Background>
						<ModalWrapper showmodal={showModal}>
							<ModalContent>
								<h1>Ready to Publish</h1>
								<button onClick={() => setShowModal((prev) => !prev)}>
									Cancel
								</button>
								<button
                                    type='submit'
									>
									Publish
								</button>
							</ModalContent>
						</ModalWrapper>
					</Background>
				) : null}
			</>
		);
};

export default Modal;