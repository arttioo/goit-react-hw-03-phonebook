import styled from "styled-components";
import{Form as FormikForm} from 'formik'

export const Form = styled(FormikForm)`
width:200px;
display:flex;
gap:15px;
flex-direction:column;
outline:1px solid;
padding:20px;
`;

export const FormField=styled.label`
display:flex;
gap:4px;
flex-direction:column;
`;