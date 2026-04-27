import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 560px;
  margin: 60px auto;
  padding: 0 16px;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: #1a1a2ee0;
  margin-bottom: 24px;
  text-align: center;
  letter-spacing: -0.03em;
`;

export const AddRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 24px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 12px 16px;
  font-size: 14px;
  color: #000;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  outline: none;
  background: #fff;
  transition: border-color 0.2s;

  &:focus {
    border-color: #667eea;
  }

  &::placeholder {
    color: #a0aec0;
  }
`;

export const AddButton = styled.button`
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  background: #667eea;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;
  white-space: nowrap;

  &:hover {
    background: #5a67d8;
  }

  &:active {
    transform: scale(0.97);
  }
`;

export const Counter = styled.p`
  text-align: right;
  font-size: 12px;
  color: #a0aec0;
  margin-bottom: 8px;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
`;

export const TaskItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  border-radius: 12px;
  padding: 14px 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }
`;

export const TaskText = styled.span`
  font-size: 14px;
  color: #2d3748;
  flex: 1;
  margin-right: 12px;
  line-height: 1.4;
`;

export const DeleteButton = styled.button`
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 600;
  color: #e53e3e;
  background: #fff5f5;
  border: 1.5px solid #feb2b2;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
  flex-shrink: 0;

  &:hover {
    background: #fed7d7;
    border-color: #fc8181;
  }
`;

export const EmptyState = styled.p`
  text-align: center;
  color: #a0aec0;
  font-size: 14px;
  padding: 32px 0;
`;