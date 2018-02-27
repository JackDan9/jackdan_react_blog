export default(timestamp) => {
    return ((timeDifference) => {
        if (!timeDifference.years) {
            if (!timeDifference.months) {
                if (!timeDifference.days) {
                    if (!timeDifference.hours) {
                        if (!timeDifference.minutes) {
                            if (!timeDifference.seconds) {
                                return '刚刚';
                            } else {
                                return `${timeDifference.seconds} 秒前`;
                            }
                        } else {
                            return `${timeDifference.minutes} 分钟前`;
                        }
                    } else {
                        return `${timeDifference.hours} 小时前`;
                    }
                } else {
                    return `${timeDifference.days} 天前`;
                }
            } else {
                return `${timeDifference.months} 个月前`;
            }
        } else {
            return `${timeDifference.years} 年前`;
        }
    })(((time) => {
        let S = time % (12 * 30 * 24 * 3600 * 1000);
        const years = Math.round(time / (12 * 30 * 24 * 3600 * 1000));
        const months = Math.round(S / (30 * 24 * 3600 * 1000))
        S = S % (30 * 24 * 3600 * 1000);
        const days = Math.round(S / (24 * 3600 * 1000));
        S = S % (24 * 3600 * 1000);
        const hours = Math.round(S / (3600 * 1000));
        S = S % (3600 * 1000);
        const minutes = Math.round(S / (60 * 1000));
        S = S % (60 * 1000);
        const seconds = Math.round(S / 1000);
        return {
            years,
            months,
            days,
            hours,
            minutes,
            seconds
        }
    })(new Date() - new Date(timestamp)))
}