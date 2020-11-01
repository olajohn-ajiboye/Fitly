import { Paper } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

export const Wrapper = styled(Paper)({
  width: '100%',
  overflow: 'hidden',
  boxShadow: '5px 5px 20px 7px rgba(168, 168, 168, 1)',
});

export const CarouselSlot = styled(Paper)({
  flex: '1 0 100%',
  flexBasis: '80%',
  marginRight: '20px',
});
