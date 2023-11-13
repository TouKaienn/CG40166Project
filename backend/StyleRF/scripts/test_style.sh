expname=vortex
python train_style.py \
--config configs/nerf_synthetic_style.txt \
--datadir /home/yuxuankuang/Style4VisRF/StyleRF/data/nerf_synthetic/vortex \
--expname $expname \
--ckpt ./log_style/vortex/vortex.th \
--style_img /home/yuxuankuang/Style4VisRF/StyleRF/data/ref_case/vortex_tf/r_0000.png \
--render_only 1 \
--render_train 0 \
--render_test 1 \
--render_path 0 \
--chunk_size 1024 \
--rm_weight_mask_thre 0.0001 \