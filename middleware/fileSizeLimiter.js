const MB = 5; // 5mb limit
const FILE_SIZE_LIMIT = MB * 1024 * 1024;

const fileSizeLimiter = (req, res, next) => {
    const files = req.files 

    const filesOverLimit = [];
    // which files are over the limit?
    Object.keys(files).forEach((key) => {
        if (files[key].size > FILE_SIZE_LIMIT) {
            filesOverLimit.push(files[key].name)
        }
    });

    if (filesOverLimit.length) {
        const message = 'file cannot be more than 5mb';

        return res.status(413).json( {status: 'error', message});
    }

    next();
}

module.exports = fileSizeLimiter