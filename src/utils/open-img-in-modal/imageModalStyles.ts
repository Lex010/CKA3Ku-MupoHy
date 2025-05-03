function getCSSVar(name: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

export class ModalStyles {
  static readonly defaultTxtColor = getCSSVar('--navBtnTxt');

  static readonly defaultBgColor = getCSSVar('--txtLeftBorder');

  static readonly hoverColor = getCSSVar('--h1AndHover');

  static applyModalOverlayStyles(el: HTMLElement) {
    Object.assign(el.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px 0',
      zIndex: '1000',
      userSelect: 'none',
      pointerEvents: 'auto',
      boxSizing: 'border-box',
    });
  }

  static applyFullImageStyles(el: HTMLImageElement) {
    Object.assign(el.style, {
      maxWidth: '96%',
      maxHeight: 'calc(100vh - 80px)',
      objectFit: 'contain',
      boxShadow: '0 0 20px rgba(255,255,255,0.3)',
    });
  }

  static applyButtonPanelStyles(el: HTMLElement) {
    Object.assign(el.style, {
      width: '100%',
      background: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      justifyContent: 'center',
      gap: '8px',
      padding: '10px 0',
      boxSizing: 'border-box',
    });
  }

  static applyCloseButtonStyles(el: HTMLElement) {
    Object.assign(el.style, {
      background: ModalStyles.defaultBgColor,
      color: ModalStyles.defaultTxtColor,
      padding: '8px 16px',
      fontSize: '18px',
      cursor: 'pointer',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.5)',
      transition: 'all 0.3s ease',
    });

    const elemt = el;

    el.addEventListener('mouseenter', () => {
      elemt.style.background = ModalStyles.hoverColor;
      elemt.style.transform = 'scale(1.05)';
    });

    el.addEventListener('mouseleave', () => {
      elemt.style.background = ModalStyles.defaultBgColor;
      elemt.style.transform = 'scale(1)';
    });
  }
}
