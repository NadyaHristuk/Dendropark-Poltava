import { useMemo } from 'react';
import { useMedia } from '../../../hooks';
// import 'src/styles/_colors.scss';

export const useSelectStyles = () => {
  const mediaRuls = useMedia();
  const { isMobile } = mediaRuls;
  return useMemo(
    () => ({
      control: (baseStyles) => ({
        ...baseStyles,
        display: 'flex',
        alignItems: 'center',
        padding: '0 14px',
        width: 68,
        height: 50,
        borderRadius: 201,
        borderColor: 'rgba(43, 42, 41, 0.2)',
      }),
      valueContainer: (baseStyles) => ({
        ...baseStyles,
        // width: 16,
        padding: 0,
        margin: 0,
      }),
      input: () => {
        return { display: 'none' };
      },
      singleValue: () => ({
        fontWeight: 'normal',
        lineHeight: 1,
        letterSpacing: '-0.01em',
        color: '#014631',
        textTransform: 'uppercase',
      }),
      indicatorsContainer: (baseStyles) => ({
        ...baseStyles,
        alignSelf: 'center',
        width: 18,
        height: 18,
        transform: 'translateY(-2px)',
      }),
      dropdownIndicator: (baseStyles) => ({
        ...baseStyles,
        color: '#014631',
        padding: 0,
        alignSelf: 'center',
        width: '100%',
        height: '100%',
      }),
      indicatorSeparator: () => null,
      menuList: (baseStyles) => ({
        ...baseStyles,
        paddingBottom: 0,
        paddingTop: 0,
        borderRadius: 4,
      }),
      option: (baseStyles) => ({
        ...baseStyles,
        paddingBottom: 4,
        paddingTop: 4,
        font: 'Montserrat',
        fontWeight: 500,
        fontSize: 14,
        lineHeight: '24px',
        color: '#014631',
        textTransform: 'uppercase',
      }),
    }),
    [isMobile]
  );
};
