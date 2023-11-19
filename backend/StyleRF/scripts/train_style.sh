python train_style.py \
    --config=configs/nerf_synthetic_style.txt \
    --datadir=data/nerf_synthetic/$1/ \
    --ckpt=log_feature/$1/$1.th \
    --expname=$1 \
    --style_img=data/ref_case/$2