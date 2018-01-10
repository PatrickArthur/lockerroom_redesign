class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable, omniauth_providers: %i[facebook]
  mount_uploader :avatar, AvatarUploader
  has_one :profile
  has_many :athlete_metrics
  has_many :messages, :dependent => :destroy
  has_many :conversations, foreign_key: :sender_id, :dependent => :destroy
  validates_presence_of   :avatar
  validates_integrity_of  :avatar
  validates_processing_of :avatar

  def online?
    $redis_onlines.exists( self.id )
  end
end
