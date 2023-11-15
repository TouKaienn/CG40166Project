python train_feature.py \
    --config=configs/nerf_synthetic_feature.txt \
    --datadir=data/nerf_synthetic/$1/ \
    --ckpt = ./log/$1/$1.th \
    --expname=$1