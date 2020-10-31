import { notification } from 'antd';

export const addNotification = (uid, title, message, type, callback) => {
    const width = 380;
    const height = 100;
    const autoDismiss = 3;
    if (type === 'success') {
		notification[type]({
			key: uid,
			message: title,
			description: message,
			duration: autoDismiss,
			placement: 'topRight',
			style: {
                width,
                height,
				backgroundColor: '#F6FFED',
				border: 'solid 1px #B7EB8F',
				color: 'black'
			},
			onClose: callback
		});
	} else if (type === 'warning') {
		notification[type]({
			key: uid,
			message: title,
			description: message,
			duration: autoDismiss,
			placement: 'topRight',
			style: {
				width,
                height,
				backgroundColor: '#FFFBE6',
				border: 'solid 1px #FFE58F',
				color: 'black'
			},
			onClose: callback
		});
	} else if (type === 'error') {
		notification[type]({
			key: uid,
			message: title,
			description: message,
			duration: autoDismiss,
			placement: 'topRight',
			style: {
				width,
                height,
				backgroundColor: '#FFF2F0',
				border: 'solid 1px #FFCCC7',
				color: 'black'
			},
			onClose: callback
		});
	} else if (type === 'info') {
		notification[type]({
			key: uid,
			message: title,
			description: message,
			duration: autoDismiss,
			placement: 'topRight',
			style: {
				width,
                height,
				backgroundColor: '#E6F7FF',
				border: 'solid 1px #91D5FF',
				color: 'black'
			},
			onClose: callback
		});
	}
}